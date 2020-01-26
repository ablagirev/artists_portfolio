import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { NotFound } from './NotFound'

import { artistActions } from 'client/reducer'
import { BaseArtistDetailsTemplate } from 'client/templates'

export const ArtistDetails = () => {
  const { id: artistId } = useParams()

  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    artistDetails: state.artist.details,
    error: state.artist.error
  }))

  useEffect(() => {
    dispatch(artistActions.getArtistDetails(artistId))
  }, [])

  const { artistDetails, error } = mapState

  return error.message ? <NotFound /> : <BaseArtistDetailsTemplate data={artistDetails} />
}
