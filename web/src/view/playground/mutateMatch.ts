import { ApolloClient, gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { FetchMatchesVariables } from '../../graphql/query.gen'
//import {fetchMatch,fragmentMatch} from './fetchMatch'

const matchMutation = gql`
  mutation AddMatch($courtID: Int) {
    addMatch(courtID: $courtID)
  }
`

export function addMatchMutationClient(client: ApolloClient<any>, courtID: number) {
  return client.mutate<FetchMatchesVariables>({
    mutation: matchMutation,
    variables: { courtID },
  })
}

export function addMatchMutation(courtID: number) {
  return getApolloClient().mutate<FetchMatchesVariables>({
    mutation: matchMutation,
    variables: { courtID },
  })
}
