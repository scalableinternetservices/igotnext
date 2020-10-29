import { useQuery } from '@apollo/client'
import { RouteComponentProps, useLocation } from '@reach/router'
import * as React from 'react'
import { FetchCourt, FetchCourtVariables } from '../../graphql/query.gen'
import { AppRouteParams } from '../nav/route'
import { fetchCourtID } from '../playground/fetchCourt'
import { Page } from './Page'

interface ProjectsPageProps extends RouteComponentProps, AppRouteParams {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function StartingMatchPage(props: ProjectsPageProps) {
  const location = useLocation()
  const gameID = (location.search || '').split('?gameID=')[1].split('.')[0]
  // const longitude_ = (location.search || '').split('?gameID=')[1].split('.')[2]
  // const latitude_ = (location.search || '').split('?gameID=')[1].split('.')[1]

  const { data } = useQuery<FetchCourt, FetchCourtVariables>(fetchCourtID, {
    variables: { court_ID: parseInt(gameID) },
  })
  console.log(rosterConversion(data?.courtind?.roster))
  return (
    <Page>
      <h1>YOU JOINED MATCH {gameID}</h1>
      <h4>Current Players</h4>
      <div className="mw6">
        {rosterConversion(data?.courtind?.roster)?.map((s, i) => (
          <div key={i} className="pa3 br2 mb2 bg-black-10 flex items-center">
            <p>{s}</p>
          </div>
        ))}
      </div>
    </Page>
  )
}

function rosterConversion(roster: string | null | undefined) {
  if (roster === null || roster === undefined) {
    return
  }
  let result = roster.split(',')
  result = result.filter(word => word.length > 0)
  return result
}
