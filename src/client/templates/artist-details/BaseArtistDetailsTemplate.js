import React, { useEffect } from 'react'
import { Breadcrumb, Col, Row } from 'antd'
import styled from 'styled-components'

import { Header } from 'client/components/Header'
import { Footer } from 'client/components/Footer'
import { Text } from 'client/ui-kit'
import { theme } from 'client/theme'
import buntina from 'client/assets/img/buntina/1.jpeg'

export const BaseArtistDetailsTemplate = ({ data }) => {
  const { photo } = data
  return (
    <>
      <Header />
      <Row>
        <Col span={24}>
          <Breadcrumb />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <PhotoViewer data={photo} />
        </Col>
        <Col span={12}>
          <Info data={data} />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

const PhotoViewer = () => {
  return (
    <>
      <MainPhoto>
        <img src={buntina} />
      </MainPhoto>
      <PhotoPreviewList data={[{ src: '' }]} />
    </>
  )
}

const MainPhoto = styled.div`
  & img {
    width: 100%;
  }
  // max-height: 684px;
`

const PhotoPreviewList = ({ data }) => {
  return data.map(({ src }) => {
    return <img key={src} src={src} />
  })
}

const Info = ({ data }) => {
  const { firstName, lastName, middleName, age, height, city } = data
  const fullName = `${lastName} ${firstName} ${middleName}`

  return (
    <>
      <GeneralInfo>
        <Row>
          <Col span={6}>
            <Text color={theme.colors.blue.primary}>Возраст:</Text>
          </Col>
          <Col span={6}>
            <Text>{age}</Text>
          </Col>
        </Row>
      </GeneralInfo>
      <FullName>{fullName}</FullName>
    </>
  )
}

const FullName = styled.div`
  display: flex;
`

const GeneralInfo = styled.div`
  width: 100%;
`
