import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BaseAboutTemplate } from 'templates'
import { Loader } from 'ui-kit'
import { aboutActions } from 'reducer'

import { NotFound } from './NotFound'

export const About = () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    fetching: state.about.fetching,
    error: state.about.error,
    about: state.about
  }))

  useEffect(() => {
    dispatch(aboutActions.getAbout())
  }, [dispatch])

  const { about, fetching, error } = mapState
  const breadcrumbs = {
    text: 'Главная',
    url: '/',
    nested: {
      text: 'О нас'
    }
  }
  const data = { ...about, breadcrumbs }

  return error.message ? <NotFound /> : fetching ? <Loader /> : <BaseAboutTemplate data={data} />
}
