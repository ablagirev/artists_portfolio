/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import { Col, Row } from 'antd'
import { ArtistInfo } from 'components/ArtistInfo'
import { PhotoViewer } from 'components/PhotoViewer'
import React from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import { Breadcrumbs } from 'ui-kit'

export const BaseArtistDetailsTemplate = ({ data, background }) => {
  const { photo, lastName, firstName, middleName, gender } = data

  const fullName = `${lastName} ${firstName} ${middleName}`
  const genderMapping = {
    female: {
      url: '/actresses',
      text: 'Актрисы'
    },
    male: {
      url: '/actors',
      text: 'Актёры'
    }
  }

  const genderData = genderMapping[gender]
  let breadcrumbs = {}
  if (genderData) {
    breadcrumbs = {
      text: 'Главная',
      url: '/',
      nested: {
        text: genderData['text'],
        url: genderData['url'],
        nested: {
          text: fullName
        }
      }
    }
  }

  return (
    <>
      <ContentWrapper>
        <Row>
          <Col>
            <Breadcrumbs data={breadcrumbs} />
          </Col>
        </Row>
        <Row>
          <Col lg={10}>
            <PhotoViewer data={photo} />
          </Col>
          <Col lg={14}>
            <ArtistInfo data={data} />
          </Col>
        </Row>
      </ContentWrapper>
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

const ContentWrapper = styled.div`
  padding: 0 140px;
  margin-bottom: 200px;

  @media (max-width: ${theme.breakpoint}px) {
    padding: 0 18px;
  }
`
