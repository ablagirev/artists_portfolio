import React from 'react'
import { Breadcrumb, Col, Row } from 'antd'
import styled from 'styled-components'

export const BaseArtistDetailsTemplate = ({ data }) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Breadcrumb />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Photo />
        </Col>
        <Col span={12}>
          <Info />
        </Col>
      </Row>
    </>
  )
}

const Photo = () => {
  return 'photo'
}

const Info = () => {
  return <FullName>Друзенко Анатолий Павлович</FullName>
}

const FullName = styled.div`
  display: flex;
`
