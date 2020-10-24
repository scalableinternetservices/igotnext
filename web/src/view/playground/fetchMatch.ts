import { gql } from '@apollo/client'

export const fragmentMatch = gql`
  fragment Match on Match {
    matchID
    status
  }
`

export const fetchMatch = gql`
  query FetchMatches($matchId: Int!) {
    match(match_id: $matchId) {
      ...Match
    }
  }
  ${fragmentMatch}
`
