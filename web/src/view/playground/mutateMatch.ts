import { ApolloClient, gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { FetchMatchesVariables } from '../../graphql/query.gen'
//import {fetchMatch,fragmentMatch} from './fetchMatch'

const matchMutation = gql`
  mutation AddMatch($match_id: Int) {
    addMatch(match_id: $match_id)
  }
`

export function addMatchMutationClient(client: ApolloClient<any>) {
  return client.mutate<FetchMatchesVariables>({
    mutation: matchMutation,
  })
}

export function addMatchMutation() {
  return getApolloClient().mutate<FetchMatchesVariables>({
    mutation: matchMutation,
  })
}
