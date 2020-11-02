import * as schedule from 'node-schedule'
import { check } from '../../common/src/util'
import { Court } from './entities/Court'

async function swapFeaturedCourt(courtID: number) {
  const featured_court = check(await Court.findOne({ where: { featured: true } }))
  // if no featured courts, we ignore the feature
  if (featured_court === null) {
    return false
  }
  // otherwise, swap which court is featured (one maximum)
  const featured_id = featured_court.courtID

  const feature_rand = check(await Court.findOne({ where: { courtID: courtID } }))
  if (feature_rand !== null) {
    console.log('featuring: ' + feature_rand.courtName)
    feature_rand.featured = true
    await feature_rand.save()
    featured_court.featured = false
    await featured_court.save()
    return true
  }

  const feature_up = check(await Court.findOne({ where: { courtID: featured_id + 1 } }))
  if (feature_up !== null) {
    console.log('featuring: ' + feature_up.courtName)
    feature_up.featured = true
    await feature_up.save()
    featured_court.featured = false
    await featured_court.save()
    return true
  }

  const feature_down = check(await Court.findOne({ where: { courtID: featured_id - 1 } }))
  if (featured_id > 1 && feature_down !== null) {
    console.log('featuring: ' + feature_down.courtName)
    feature_down.featured = true
    await feature_down.save()
    featured_court.featured = false
    await featured_court.save()
    return true
  }

  return false
}

class backgournd_jobs {
  public featured_court() {
    schedule.scheduleJob('* * * * *', async function () {
      try {
        const newFeatured = Math.floor(Math.random() * 8) + 1
        await swapFeaturedCourt(newFeatured)
      } catch (err) {
        console.log(err)
      }
    })
  }
}

export default new backgournd_jobs()
