import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BaseMainTemplate } from 'templates'

import { Loader } from 'ui-kit'


import { NotFound } from './NotFound'

import { mainActions } from '../reducer'

export const Main = () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    fetching: state.main.fetching,
    error: state.main.error,
    photos: state.main.photos
  }))

  useEffect(() => {
    dispatch(mainActions.getMain())
  }, [dispatch])

  const { photos, fetching, error } = mapState

  return error.message ? <NotFound /> : fetching ? <Loader /> : <BaseMainTemplate data={photos} />
}
