import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { BaseArtistListTemplate } from 'client/templates'
import { artistActions } from 'client/reducer'

export const ArtistList = () => {
  const dispatch = useDispatch()
  const mapState = useCallback(state => ({
    data: state
  }))

  useEffect(() => {
    dispatch(artistActions.getArtistList())
  }, [])
  return <BaseArtistListTemplate data="Список артистов" />
}
