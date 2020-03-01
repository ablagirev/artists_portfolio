import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ABOUT, DETAILS, LIST, MAIN } from './names'

import { NotFound } from 'client/pages/NotFound'
import { Main } from 'client/pages/Main'
import { About } from 'client/pages/About'
import { ArtistList } from 'client/pages/ArtistList'
import { ArtistDetails } from 'client/pages/ArtistDetails'

export const RoutesConfig = () => {
  return (
    <Switch>
      <Route exact path={MAIN} component={Main} />
      <Route path={ABOUT} component={About} />
      <Route path={DETAILS} component={ArtistDetails} />
      <Route path={LIST} component={ArtistList} />
      <Route component={NotFound} />
    </Switch>
  )
}
