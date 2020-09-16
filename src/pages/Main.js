/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Loader } from 'ui-kit'
import { theme } from 'theme'
import { mainActions } from 'reducer'
import { BaseMainTemplate } from 'templates'
import { Header, Footer, Layout } from 'components'

import { backgroundImgMain } from 'assets/img/background'

import { loadLayout } from '../../utils/loadLayout'

import { NotFound } from './NotFound'

export const Main = () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    header: state.header,
    footer: state.footer,
    fetching: state.main.fetching,
    error: state.main.error,
    photos: state.main.photos
  }))
  const background = {
    desktop: backgroundImgMain.desktop,
    mobile: backgroundImgMain.mobile
  }
  const { header, footer, photos, fetching, error } = mapState

  useEffect(() => {
    loadLayout(header.fetching, footer.fetching, dispatch)
    dispatch(mainActions.getMain())
  }, [dispatch])

  return error.message ? (
    <NotFound />
  ) : fetching ? (
    <>
      <Loader />
    </>
  ) : (
    <Layout>
      <Header data={header} />
      <BaseMainTemplate data={photos} background={background} />
      <Footer data={footer} />
    </Layout>
  )
}
