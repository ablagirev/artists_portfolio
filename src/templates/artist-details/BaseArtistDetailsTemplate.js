import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import { Layout } from '../../components'

import { theme } from 'theme'
import { ArtistInfo } from 'components/ArtistInfo'
import { PhotoViewer } from 'components/PhotoViewer'
import { Breadcrumbs } from 'ui-kit'

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
    <Layout>
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
    </Layout>
  )
}

const ContentWrapper = styled.div`
  padding: 0 140px;

  @media (max-width: ${theme.breakpoint}px) {
    padding: 0 18px;
  }
`
