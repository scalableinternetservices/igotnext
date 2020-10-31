import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { Page } from './Page'

interface PlaygroundPageProps extends RouteComponentProps, AppRouteParams {}

export function PlaygroundPage(props: PlaygroundPageProps) {
  return <Page>{getPlaygroundApp(props.app)}</Page>
}

function getPlaygroundApp(app?: PlaygroundApp) {
  if (!app) {
    return <button> hello </button>
  }
  return <div>Game Histories</div>
}
