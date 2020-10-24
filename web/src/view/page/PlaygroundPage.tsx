import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { addMatchMutation } from '../playground/mutateMatch'
import { Page } from './Page'

interface PlaygroundPageProps extends RouteComponentProps, AppRouteParams {}

export function PlaygroundPage(props: PlaygroundPageProps) {
  return <Page>{getPlaygroundApp(props.app)}</Page>
}

function getPlaygroundApp(app?: PlaygroundApp) {
  if (!app) {
    //onClick={addMatchMutation}
    return <button onClick={addMatchMutation}> hello</button>
  }
  return <div></div>
  /*
  switch (app) {
    case PlaygroundApp.SURVEYS:
      return <Surveys />
    case PlaygroundApp.LOGIN:
      return <Login />
    default:
      throw new Error('no app found')
  }
  */
}
