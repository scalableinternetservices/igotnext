import { gql } from '@apollo/client'

export const fragmentMatch = gql`
  fragment Match on Match {
    matchID
    status
  }
`

export const fetchMatch = gql`
  query FetchMatches {
    match {
      ...Match
    }
  }
  ${fragmentMatch}
`
