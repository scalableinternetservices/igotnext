import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { AppRouteParams } from '../nav/route'
import { Page } from './Page'

interface ProjectsPageProps extends RouteComponentProps, AppRouteParams {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function StartingMatchPage(props: ProjectsPageProps) {
  return (
    <Page>
      <p>YOU JOINED A MATCH</p>
    </Page>
  )
}
