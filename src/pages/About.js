/* eslint-disable no-nested-ternary */
import { backgroundImgAbout } from 'assets/img/background'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { aboutActions } from 'reducer'
import styled from 'styled-components'
import { BaseAboutTemplate } from 'templates'
import { Loader } from 'ui-kit'
import { NotFound } from './NotFound'

export const About = () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    fetching: state.about.fetching,
    error: state.about.error,
    about: state.about
  }))

  const background = {
    desktop: backgroundImgAbout.desktop,
    mobile: backgroundImgAbout.mobile
  }

  useEffect(() => {
    dispatch(aboutActions.getAbout())
  }, [dispatch])

  const { about, fetching, error } = mapState
  const breadcrumbs = {
    text: 'Главная',
    url: '/',
    nested: {
      text: 'О нас'
    }
  }
  const data = { ...about, breadcrumbs }

  return error.message ? (
    <NotFound />
  ) : fetching ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <BaseAboutTemplate data={data} background={background} />
  )
}

const LoaderWrapper = styled.div`
  position: absolute;
  right: 40%;
  bottom: 60%;
`
