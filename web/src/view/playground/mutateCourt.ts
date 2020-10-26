import { ApolloClient, gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { FetchCourtsVariables } from '../../graphql/query.gen'
// import { fetchCourt, fragmentCourt } from './fetchCourt'

const courtMutation = gql`
  mutation AddToCourt($court_id: Int!) {
    addUserToCourt(courtID: $court_id)
  }
`

export function addMatchMutationClient(client: ApolloClient<any>, court_ID: number) {
  return client.mutate<FetchCourtsVariables>({
    mutation: courtMutation,
    variables: { court_ID },
  })
}

export function addCourtMutation(court_ID: number) {
  return getApolloClient().mutate<FetchCourtsVariables>({
    mutation: courtMutation,
    variables: { court_ID },
  })
}
