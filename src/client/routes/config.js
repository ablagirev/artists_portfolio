import React, { useCallback } from 'react'
import { Route, Switch } from 'react-router-dom'

import { ABOUT, DETAILS, LIST, MAIN } from './names'

import { NotFound } from 'components/pages/NotFound'
import { Main } from 'components/pages/Main'
import { About } from 'components/pages/About'
import { ArtistList } from 'components/pages/ArtistList'
import { ArtistDetails } from 'components/pages/ArtistDetails'

export const RoutesConfig = () => {
  return (
    <Switch>
      <Route exact path={MAIN} component={Main}/>
      <Route path={LIST} component={ArtistList} />
      <Route path={DETAILS} component={ArtistDetails} />
      <Route path={ABOUT} component={About} />
      <Route component={NotFound} />
    </Switch>
  )
}
