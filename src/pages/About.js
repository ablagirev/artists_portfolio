/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loader } from 'ui-kit'
import { aboutActions } from 'reducer'
import { BaseAboutTemplate } from 'templates'
import { Header, Footer, Layout } from 'components'

import { backgroundImgAbout } from 'assets/img/background'

import { loadLayout } from '../../utils/loadLayout'

import { NotFound } from './NotFound'

export const About = () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    header: state.header,
    footer: state.footer,
    fetching: state.about.fetching,
    error: state.about.error,
    about: state.about
  }))

  const background = {
    desktop: backgroundImgAbout.desktop,
    mobile: backgroundImgAbout.mobile
  }
  const { header, footer, about, fetching, error } = mapState

  useEffect(() => {
    loadLayout(header.fetching, footer.fetching, dispatch)
    dispatch(aboutActions.getAbout())
  }, [dispatch])

  const breadcrumbs = {
    text: 'Главная',
    url: '/',
    nested: {
      text: 'О нас'
    }
  }
  const data = { ...about, breadcrumbs }
  const isFetching = fetching || header.fetching || footer.fetching

  return error.message ? (
    <NotFound />
  ) : isFetching ? (
    <Loader />
  ) : (
    <Layout>
      <Header data={header} />
      <BaseAboutTemplate data={data} background={background} />
      <Footer data={footer} />
    </Layout>
  )
}
