import { ApolloClient, gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { FetchCourtsVariables, swapCourtFeatureVariables } from '../../graphql/query.gen'
// import { fetchCourt, fragmentCourt } from './fetchCourt'

const courtMutation = gql`
  mutation AddToCourt($court_id: Int!, $nickname: String) {
    addUserToCourt(courtID: $court_id, nickname: $nickname)
  }
`

export function addMatchMutationClient(client: ApolloClient<any>, court_id: number, nickname: string) {
  return client.mutate<FetchCourtsVariables>({
    mutation: courtMutation,
    variables: { court_id, nickname },
  })
}

export function addCourtMutation(court_id: number, nickname: string) {
  return getApolloClient().mutate<FetchCourtsVariables>({
    mutation: courtMutation,
    variables: { court_id, nickname },
  })
}

const courtFeature = gql`
  mutation swapCourtFeature($court_id: Int!) {
    swapFeaturedCourt(courtID: $court_id)
  }
`

export function swapCourtFeatureClient(client: ApolloClient<any>, court_id: number) {
  return client.mutate<swapCourtFeatureVariables>({
    mutation: courtFeature,
    variables: { court_id },
  })
}

export function swapCourtFeature(court_id: number) {
  console.log(' 1. swap court feature')
  return getApolloClient().mutate<swapCourtFeatureVariables>({
    mutation: courtFeature,
    variables: { court_id },
  })
}
