import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { AppRouteParams } from '../nav/route'
import { Parks } from '../playground/Parks'
import { Page } from './Page'
npm
interface HomePageProps extends RouteComponentProps, AppRouteParams {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomePage(props: HomePageProps) {
  return (
    <>
      <React.Fragment>
        <Page></Page>
      </React.Fragment>
      <Parks />
    </>
  )
}
