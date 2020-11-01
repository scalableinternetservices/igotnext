import { useQuery } from '@apollo/client'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
// import { Link } from '@reach/router'
import { FetchAllGames, FetchGamesVariables } from '../../graphql/query.gen'
import { Spacer } from '../../style/spacer'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { fetchAllGames } from '../playground/fetchGame'
import { Page } from './Page'

interface PlaygroundPageProps extends RouteComponentProps, AppRouteParams {}

export function PlaygroundPage(props: PlaygroundPageProps) {
  return <Page>{getPlaygroundApp(props.app)}</Page>
}
function rosterConversion(roster: string | null | undefined) {
  if (roster === null || roster === undefined) {
    return
  }
  const result = roster.replaceAll(',', ' ')
  return result
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
      GAME HISTORY
      <div className="mw6">
        {data?.allGames?.map((s, i) => (
          <div key={i} className="pa3 br2 mb2 bg-black-10 flex items-center">
            <table>
              <tr> Game {s?.matchID}</tr>
            </table>
            <Spacer $h4 />
            <p> Players : {rosterConversion(s?.roster)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
