import { ApolloClient, gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { FetchGamesVariables } from '../../graphql/query.gen'

const gameMutation = gql`
  mutation AddGame($courtID: Int) {
    addGame(courtID: $courtID)
  }
`

export function addGameMutationClient(client: ApolloClient<any>, courtID: number) {
  return client.mutate<FetchGamesVariables>({
    mutation: gameMutation,
    variables: { courtID },
  })
}

export function addGameMutation(courtID: number) {
  return getApolloClient().mutate<FetchGamesVariables>({
    mutation: gameMutation,
    variables: { courtID },
  })
}
