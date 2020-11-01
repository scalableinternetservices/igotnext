import { float } from 'aws-sdk/clients/lightsail'
import { readFileSync } from 'fs'
import { PubSub } from 'graphql-yoga'
import path from 'path'
import { check } from '../../../common/src/util'
import { Court } from '../entities/Court'
import { Game } from '../entities/Game'
import { Park } from '../entities/Park'
import { Survey } from '../entities/Survey'
import { SurveyAnswer } from '../entities/SurveyAnswer'
import { SurveyQuestion } from '../entities/SurveyQuestion'
import { User } from '../entities/User'
import { Resolvers } from './schema.types'

export const pubsub = new PubSub()

export function getSchema() {
  const schema = readFileSync(path.join(__dirname, 'schema.graphql'))
  return schema.toString()
}

interface Context {
  user: User | null
  request: Request
  response: Response
  pubsub: PubSub
}
// Converts numeric degrees to radians
function toRad(Value: float) {
  return (Value * Math.PI) / 180
}

function calcKM(lat1_o: float, lon1_o: float, lat2_o: float, lon2_o: float) {
  // calculate km distance between two points
  const R = 6371 // km
  const dLat = toRad(lat2_o - lat1_o)
  const dLon = toRad(lon2_o - lon1_o)
  const lat1 = toRad(lat1_o)
  const lat2 = toRad(lat2_o)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c
  return d
}

export const graphqlRoot: Resolvers<Context> = {
  Query: {
    self: (_, args, ctx) => ctx.user,
    survey: async (_, { surveyId }) => (await Survey.findOne({ where: { id: surveyId } })) || null,
    surveys: () => Survey.find(),
    game: async (_, { match_id }) => (await Game.findOne({ where: { matchID: match_id } })) || null,
    park: async (_, { park_id }) => (await Park.findOne({ where: { parkID: park_id } })) || null,
    court: async (_, { longitude, latitude }) => {
      const courts = await Court.find()
      const result: Array<Court> = []

      courts.forEach(element => {
        if (calcKM(element.latitude, element.longitude, latitude, longitude) < 10) {
          // we can change distance we want later if need be
          // simple less than 10 km
          result.push(element)
        }
      })

      return result
    },
    courtind: async (_, { court_ID }) => (await Court.findOne({ where: { courtID: court_ID } })) || null,
  },
  Mutation: {
    answerSurvey: async (_, { input }, ctx) => {
      const { answer, questionId } = input
      const question = check(await SurveyQuestion.findOne({ where: { id: questionId }, relations: ['survey'] }))

      const surveyAnswer = new SurveyAnswer()
      surveyAnswer.question = question
      surveyAnswer.answer = answer
      await surveyAnswer.save()

      question.survey.currentQuestion?.answers.push(surveyAnswer)
      ctx.pubsub.publish('SURVEY_UPDATE_' + question.survey.id, question.survey)

      return true
    },
    nextSurveyQuestion: async (_, { surveyId }, ctx) => {
      // check(ctx.user?.userType === UserType.Admin)
      const survey = check(await Survey.findOne({ where: { id: surveyId } }))
      survey.currQuestion = survey.currQuestion == null ? 0 : survey.currQuestion + 1
      await survey.save()
      ctx.pubsub.publish('SURVEY_UPDATE_' + surveyId, survey)
      return survey
    },
    addGame: async (_, { courtID }) => {
      const match_new = new Game()
      const corresponding_court = check(await Court.findOne({ where: { courtID: courtID } }))

      if (corresponding_court === null) {
        return false
      }
      console.log('add game:', corresponding_court)
      const roster_array = corresponding_court.roster.split(',')
      roster_array.forEach(element => {
        if (element !== null) {
          match_new.roster = match_new + element + ','
        }
      })
      match_new.court = corresponding_court

      await match_new.save()
      return true
    },
    addUserToCourt: async (_, { courtID, nickname }) => {
      const court_lobby = check(await Court.findOne({ where: { courtID: courtID } }))
      if (court_lobby === null) {
        return false
      }
      if (nickname !== undefined && nickname !== null) {
        court_lobby.roster = court_lobby.roster + ',' + nickname
      }
      if (court_lobby.lobby === 9) {
        // full so we need to convert it to match
        const match_new = new Game()
        match_new.roster = court_lobby.roster
        match_new.court = court_lobby
        match_new.status = 'FINISHED'
        await match_new.save()

        court_lobby.lobby = 0
        court_lobby.roster = ''
        await court_lobby.save()
        return true
      } else if (court_lobby.lobby <= 8) {
        court_lobby.lobby = court_lobby.lobby + 1
        await court_lobby.save()
        return true
      } else {
        return false
      }
    },
    swapFeaturedCourt: async (_, { courtID }) => {
      const featured_court = check(await Court.findOne({ where: { featured: true } }))
      // if no featured courts, we ignore the feature
      if (featured_court === null) {
        return false
      }
      // otherwise, swap which court is featured (one maximum)
      const featured_id = featured_court.courtID

      console.log(' B I G  S A D (feature_id num): ')
      console.log(featured_id)

      const feature_rand = check(await Court.findOne({ where: { courtID: courtID } }))
      if (feature_rand !== null) {
        feature_rand.featured = true
        await feature_rand.save()
        featured_court.featured = false
        await featured_court.save()
        console.log('GOING RANDOM!')
        return true
      }

      const feature_up = check(await Court.findOne({ where: { courtID: featured_id + 1 } }))
      if (feature_up !== null) {
        feature_up.featured = true
        await feature_up.save()
        featured_court.featured = false
        await featured_court.save()
        console.log('GOING UP!')
        return true
      }

      const feature_down = check(await Court.findOne({ where: { courtID: featured_id - 1 } }))
      if (featured_id > 1 && feature_down !== null) {
        feature_down.featured = true
        await feature_down.save()
        featured_court.featured = false
        await featured_court.save()
        console.log('GOING DOWN!')
        return true
      }

      return false
    },
  },
  Subscription: {
    surveyUpdates: {
      subscribe: (_, { surveyId }, context) => context.pubsub.asyncIterator('SURVEY_UPDATE_' + surveyId),
      resolve: (payload: any) => payload,
    },
  },
}
