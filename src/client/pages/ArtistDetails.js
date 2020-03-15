import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { NotFound } from './NotFound'

import { artistActions } from 'client/reducer'
import { BaseArtistDetailsTemplate } from 'client/templates'
import { Loader } from 'client/ui-kit'

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

  useEffect(() => {
    dispatch(artistActions.getArtistDetails({ type, artistId }))
  }, [dispatch])

  const { artistDetails, fetching, error } = mapState

  return error.message ? (
    <NotFound />
  ) : fetching ? (
    <Loader />
  ) : (
    <BaseArtistDetailsTemplate data={artistDetails} />
  )
}
