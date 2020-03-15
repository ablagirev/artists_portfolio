import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import { Layout } from '../../components'
import { Breadcrumbs } from '../../ui-kit'

import { ArtistPreview } from 'client/components'

export const BaseArtistListTemplate = ({ data, gender }) => {
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
        text: genderData['text'],
        url: genderData['url']
      }
    }
  }

  return (
    <Layout>
      <BreadcrumbsWrapperOuter>
        <BreadcrumbsWrapperInner>
          <Breadcrumbs data={getBreadcrumbs()} />
        </BreadcrumbsWrapperInner>
      </BreadcrumbsWrapperOuter>
      <ListWrapper>
        <CustomRow>
          {rows.map((item, index) => {
            return (
              <Col key={index} xs={24} sm={12} lg={8}>
                <ArtistPreview data={item} />
              </Col>
            )
          })}
        </CustomRow>
      </ListWrapper>
    </Layout>
  )
}

const ListWrapper = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: center;
`

const CustomRow = styled(Row)`
  max-width: 1240px;
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
