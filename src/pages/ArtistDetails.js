/* eslint-disable no-nested-ternary */
import { backgroundImgDetailed } from 'assets/img/background'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { artistActions } from 'reducer'
import styled from 'styled-components'
import { BaseArtistDetailsTemplate } from 'templates'
import { Loader } from 'ui-kit'
import { NotFound } from './NotFound'

export const ArtistDetails = () => {
  const { id: artistId, type } = useParams()

  const dispatch = useDispatch()
  const mapState = useSelector(state => {
    const artistDetails = state.artist.details

    return {
      artistDetails,
      fetching: artistDetails.fetching,
      error: state.artist.error
    }
  })

  const background = {
    desktop: backgroundImgDetailed.desktop,
    mobile: backgroundImgDetailed.mobile
  }

  useEffect(() => {
    dispatch(artistActions.getArtistDetails({ type, artistId }))
    window.scrollTo({ top: 0 })
  }, [dispatch, type, artistId])

  const { artistDetails, fetching, error } = mapState

  return error.message ? (
    <NotFound />
  ) : fetching ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <BaseArtistDetailsTemplate data={artistDetails} background={background} />
  )
}

const LoaderWrapper = styled.div`
  position: absolute;
  right: 40%;
  bottom: 60%;
`
