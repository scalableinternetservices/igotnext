import { gql } from '@apollo/client'
import { fragmentCourt } from './fetchCourt'

export const fragmentPark = gql`
  fragment Park on Park {
    parkID
    parkName
    longitude
    latitude
    courts {
      ...Court
    }
  }
`

export const fetchPark = gql`
  query FetchParks($latitude: Int!, $longitude: Int!) {
    park(latitude: $latitude, longitude: $longitude) {
      ...Park
    }
  }
  ${fragmentPark}
  ${fragmentCourt}
`

export const fetchParkID = gql`
  query FetchPark($park_id: Int!) {
    parkind(park_id: $park_id) {
      ...Park
    }
  }
  ${fragmentPark}
  ${fragmentCourt}
`
