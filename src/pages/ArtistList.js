/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Loader } from 'ui-kit'
import { artistActions } from 'reducer'
import { BaseArtistListTemplate } from 'templates'
import { backgroundImgList } from 'assets/img/background'
import { Header, Footer, Layout } from 'components'

import { loadLayout } from '../../utils/loadLayout'

import { NotFound } from './NotFound'

export const ArtistList = () => {
  const { type } = useParams()
  const dispatch = useDispatch()

  const mapState = useSelector(state => {
    const artistList = state.artist.list

    return {
      header: state.header,
      footer: state.footer,
      artistList,
      fetching: artistList.fetching,
      error: state.artist.error
    }
  })

  const background = {
    desktop: backgroundImgList.desktop,
    mobile: backgroundImgList.mobile
  }
  const { header, footer, artistList, fetching, error } = mapState

  useEffect(() => {
    loadLayout(header.fetching, footer.fetching, dispatch)
    dispatch(artistActions.getArtistList({ type }))
    window.scrollTo({ top: 0 })
  }, [dispatch, type])

  const isFetching = fetching || header.fetching || footer.fetching

  return error.message ? (
    <NotFound />
  ) : isFetching ? (
    <Loader />
  ) : (
    <Layout>
      <Header data={header} />
      <BaseArtistListTemplate data={artistList} gender={type} background={background} />
      <Footer data={footer} />
    </Layout>
  )
}
