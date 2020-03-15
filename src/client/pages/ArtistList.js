import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { NotFound } from './NotFound'

import { BaseArtistListTemplate } from 'client/templates'
import { artistActions } from 'client/reducer'
import { Loader } from 'client/ui-kit'

export const ArtistList = () => {
  const { type } = useParams()
  const dispatch = useDispatch()
  const mapState = useSelector(state => {
    const artistList = state.artist.list
    return {
      artistList,
      fetching: artistList.fetching,
      error: state.artist.error
    }
  })

  useEffect(() => {
    dispatch(artistActions.getArtistList({ type }))
  }, [])

  const { artistList, fetching, error } = mapState

  return error.message ? (
    <NotFound />
  ) : fetching ? (
    <Loader />
  ) : (
    <BaseArtistListTemplate data={artistList} gender={type} />
  )
}
