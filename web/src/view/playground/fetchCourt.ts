import { gql } from '@apollo/client'

export const fragmentCourt = gql`
  fragment Court on Court {
    courtID
    courtName
    lobby
    roster
    featured
    game {
      matchID
      status
    }
  }
`
export const fetchCourtID = gql`
  query FetchCourt($court_ID: Int!) {
    courtind(court_ID: $court_ID) {
      ...Court
    }
  }
  ${fragmentCourt}
`
