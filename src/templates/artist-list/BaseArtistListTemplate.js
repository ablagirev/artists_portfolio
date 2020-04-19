/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

import { Breadcrumbs } from '../../ui-kit'
import { theme } from '../../theme'

import { ArtistPreview } from 'components'

export const BaseArtistListTemplate = ({ data, gender, background }) => {
  const { rows } = data

  const getBreadcrumbs = () => {
    const genderMapping = {
      actresses: {
        url: '/actresses',
        text: 'Актрисы'
      },
      actors: {
        url: '/actors',
        text: 'Актёры'
      }
    }

    const genderData = genderMapping[gender]

    return {
      text: 'Главная',
      url: '/',
      nested: {
        text: genderData.text
      }
    }
  }

  return (
    <>
      <BreadcrumbsWrapperOuter>
        <BreadcrumbsWrapperInner>
          <Breadcrumbs data={getBreadcrumbs()} />
        </BreadcrumbsWrapperInner>
      </BreadcrumbsWrapperOuter>
      <ListWrapper>
        <Grid>
          {rows.map((item, index) => {
            return <ArtistPreview data={item} key={index} />
          })}
        </Grid>
      </ListWrapper>
      <BackgroundImgWrapper>
        <BackgroundImgDesktop>
          <img src={background.desktop} style={{ maxHeight: '500px' }} />
        </BackgroundImgDesktop>
        <BackgroundImgMobile>
          <img src={background.mobile} style={{ maxHeight: '300px' }} />
        </BackgroundImgMobile>
      </BackgroundImgWrapper>
    </>
  )
}

const BackgroundImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`

const BackgroundImgDesktop = styled.div`
  @media (max-width: ${theme.breakpoint}px) {
    display: none;
  }
`
const BackgroundImgMobile = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoint}px) {
    display: block;
  }
`

const ListWrapper = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 3em;
  grid-column-gap: 6em;

  @media (max-width: ${theme.breakpoint}px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
`

const BreadcrumbsWrapperInner = styled.div`
  width: 100%;
  max-width: 1240px;
`

const BreadcrumbsWrapperOuter = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: center;
`
