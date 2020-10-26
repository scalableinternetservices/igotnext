import { gql } from '@apollo/client'

export const fragmentGame = gql`
  fragment Game on Game {
    matchID
    status
  }
`

export const fetchGame = gql`
  query FetchGames($matchId: Int!) {
    game(match_id: $matchId) {
      ...Game
    }
  }
  ${fragmentGame}
`
