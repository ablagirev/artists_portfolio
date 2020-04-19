/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import { backgroundImgList } from 'assets/img/background'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { artistActions } from 'reducer'
import { BaseArtistListTemplate } from 'templates'
import { Loader } from 'ui-kit'
import { NotFound } from './NotFound'

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
  const background = {
    desktop: backgroundImgList.desktop,
    mobile: backgroundImgList.mobile
  }

  useEffect(() => {
    dispatch(artistActions.getArtistList({ type }))
    window.scrollTo({ top: 0 })
  }, [])

  const { artistList, fetching, error } = mapState

  return error.message ? (
    <NotFound />
  ) : fetching ? (
    <Loader />
  ) : (
    <BaseArtistListTemplate data={artistList} gender={type} background={background} />
  )
}
