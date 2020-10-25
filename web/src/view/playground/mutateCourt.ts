import { ApolloClient, gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { FetchCourtsVariables } from '../../graphql/query.gen'
// import { fetchCourt, fragmentCourt } from './fetchCourt'

const courtMutation = gql`
  mutation AddToCourt($court_id: Int!) {
    addUserToCourt(courtID: $court_id)
  }
`

export function addMatchMutationClient(client: ApolloClient<any>, courtID: number) {
  return client.mutate<FetchCourtsVariables>({
    mutation: courtMutation,
    variables: { courtID },
  })
}

export function addCourtMutation(courtID: number) {
  return getApolloClient().mutate<FetchCourtsVariables>({
    mutation: courtMutation,
    variables: { courtID },
  })
}
