/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BaseMainTemplate } from 'templates'
import { backgroundImgMain } from 'assets/img/background'
import styled from 'styled-components'
import { theme } from 'theme'

import { Loader } from 'ui-kit'

import { NotFound } from './NotFound'

import { mainActions } from '../reducer'

export const Main = () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    fetching: state.main.fetching,
    error: state.main.error,
    photos: state.main.photos
  }))
  const background = {
    desktop: backgroundImgMain.desktop,
    mobile: backgroundImgMain.mobile
  }

  useEffect(() => {
    dispatch(mainActions.getMain())
  }, [dispatch])

  const { photos, fetching, error } = mapState

  return error.message ? (
    <NotFound />
  ) : fetching ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <BaseMainTemplate data={photos} background={background} />
  )
}

const LoaderWrapper = styled.div`
  position: absolute;
  right: 40%;
  bottom: 60%;

  @media (max-width: ${theme.breakpoint}px) {
    right: 15%;
  }
`
