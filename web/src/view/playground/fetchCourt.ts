import { gql } from '@apollo/client'

export const fragmentCourt = gql`
  fragment Court on Court {
    courtID
    courtName
    longitude
    latitude
    lobby
    match {
      matchID
      status
    }
  }
`

export const fetchCourt = gql`
  query FetchCourts($latitude: Int!, $longitude: Int!) {
    court(latitude: $latitude, longitude: $longitude) {
      ...Court
    }
  }
  ${fragmentCourt}
`
