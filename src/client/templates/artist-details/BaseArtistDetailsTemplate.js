import React from 'react'
import { Breadcrumb, Col, Row } from 'antd'
import styled from 'styled-components'

import { Header } from 'client/components/Header'
import { Footer } from 'client/components/Footer'
import buntina from 'client/assets/img/buntina/1.jpeg'

export const BaseArtistDetailsTemplate = ({ data }) => {
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
          <PhotoViewer />
        </Col>
        <Col span={12}>
          <Info />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

const PhotoViewer = () => {
  return (
    <>
      <MainPhoto />
      <PhotoPreviewList data={[{ src: '' }]} />
    </>
  )
}

const MainPhoto = () => {
  return <img src={buntina} />
}

const PhotoPreviewList = ({ data }) => {
  return data.map(({ src }) => {
    return <img key={src} src={src} />
  })
}

const Info = () => {
  return <FullName>Друзенко Анатолий Павлович</FullName>
}

const FullName = styled.div`
  display: flex;
`
