import { useQuery } from '@apollo/client'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
// import { Link } from '@reach/router'
import { FetchAllGames, FetchGamesVariables } from '../../graphql/query.gen'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { fetchAllGames } from '../playground/fetchGame'
import { Page } from './Page'

interface PlaygroundPageProps extends RouteComponentProps, AppRouteParams {}

export function PlaygroundPage(props: PlaygroundPageProps) {
  return <Page>{getPlaygroundApp(props.app)}</Page>
}

// Format roster for printing
function rosterConversion(roster: string | null | undefined) {
  if (roster === null || roster === undefined) {
    return
  }
  return roster.substring(1).replaceAll(',', ', ')
}

function getPlaygroundApp(app?: PlaygroundApp) {
  if (!app) {
    return <button> hello </button>
  }
  const { data } = useQuery<FetchAllGames, FetchGamesVariables>(fetchAllGames, {
    pollInterval: 1000,
  })
  return (
    <div>
      <h3>Game History</h3>
      <div className="mw6">
        {data?.allGames?.map((s, i) => (
          <div key={i} className="pa3 br2 mb2 bg-black-10 flex items-center">
            <table>
              <tr> [Game {s?.matchID}] </tr>
              <tr> Player List: {rosterConversion(s?.roster)} </tr>
            </table>
          </div>
        ))}
      </div>
    </div>
  )
}
