import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Main, About, ArtistList, ArtistDetails, NotFound } from './pages'

const serviceName = process.env.SERVICE_NAME

const MAIN = serviceName ? `/${serviceName}` : ''
const MAIN_ALIAS = MAIN || '/'
const ABOUT = `${MAIN}/about`
export const LIST = `${MAIN}/:type`
export const DETAILS = `${LIST}/:id`

const routes = [
  {
    path: MAIN_ALIAS,
    component: Main,
    exact: true
  },
  {
    path: ABOUT,
    component: About
  },
  {
    path: LIST,
    component: ArtistList,
    exact: true
  },
  {
    path: DETAILS,
    component: ArtistDetails
  }
]

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route key={path} exact={!!exact} path={path} component={component} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
