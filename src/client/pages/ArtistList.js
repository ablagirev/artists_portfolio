import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BaseArtistListTemplate } from 'client/templates'
import { artistActions } from 'client/reducer'

export const ArtistList = () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    artistList: state.artist.list
  }))

  useEffect(() => {
    dispatch(artistActions.getArtistList())
  }, [])

  const { artistList } = mapState

  return <BaseArtistListTemplate data={artistList} />
}
