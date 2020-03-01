import React from 'react'
import { Breadcrumb, Row, Col } from 'antd'
import styled from 'styled-components'

import { theme } from 'client/theme'
import { Header } from 'client/components/Header'
import { Footer } from 'client/components/Footer'
import { ArtistInfo } from 'client/components/ArtistInfo'
import { PhotoViewer } from 'client/components/PhotoViewer'
import { Breadcrumbs } from 'client/ui-kit'

export const BaseArtistDetailsTemplate = ({ data }) => {
  const { photo, lastName, firstName, middleName, gender } = data

  const fullName = `${lastName} ${firstName} ${middleName}`
  const genderMapping = {
    female: {
      url: '/actresses',
      text: 'Актрисы'
    },
    male: {
      url: '/actors',
      text: 'Актёры`'
    }
  }

  const genderData = genderMapping[gender]
  let breadcrumbs = {}
  if (genderData) {
    breadcrumbs = {
      text: 'Главная',
      url: 'main',
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
      <Header />
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
      <Footer />
    </>
  )
}

const ContentWrapper = styled.div`
  padding: 0 18px;

  @media (min-width: ${theme.breakpoint}px) {
    padding: 0 140px;
  }
`
