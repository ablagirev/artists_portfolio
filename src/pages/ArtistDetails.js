/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Loader } from 'ui-kit'
import { artistActions } from 'reducer'
import { BaseArtistDetailsTemplate } from 'templates'
import { Header, Footer, Layout } from 'components'

import { backgroundImgDetailed } from 'assets/img/background'

import { loadLayout } from '../../utils/loadLayout'

import { NotFound } from './NotFound'


export const ArtistDetails = () => {
  const { id: artistId, type } = useParams()

  const dispatch = useDispatch()
  const mapState = useSelector(state => {
    const artistDetails = state.artist.details

    return {
      header: state.header,
      footer: state.footer,
      artistDetails,
      fetching: artistDetails.fetching,
      error: state.artist.error
    }
  })

  const background = {
    desktop: backgroundImgDetailed.desktop,
    mobile: backgroundImgDetailed.mobile
  }
  const { header, footer, artistDetails, fetching, error } = mapState

  useEffect(() => {
    loadLayout(header.fetching, footer.fetching, dispatch)
    dispatch(artistActions.getArtistDetails({ type, artistId }))
    window.scrollTo({ top: 0 })
  }, [dispatch, type, artistId, header.fetching, footer.fetching])

  const isFetching = fetching || header.fetching || footer.fetching

  return error.message ? (
    <NotFound />
  ) : isFetching ? (
    <Loader />
  ) : (
    <Layout>
      <Header data={header} />
      <BaseArtistDetailsTemplate data={artistDetails} background={background} />
      <Footer data={footer} />
    </Layout>
  )
}
