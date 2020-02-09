import React, { useState } from 'react'
import { Breadcrumb } from 'antd'
import styled from 'styled-components'

import { theme } from 'client/theme'
import { Header } from 'client/components/Header'
import { Footer } from 'client/components/Footer'
import { Text } from 'client/ui-kit'

export const BaseArtistDetailsTemplate = ({ data }) => {
  const { photo } = data
  // console.log(111, data)
  return (
    <>
      <Header />
      <Row>
        <Col>
          <Breadcrumb />
        </Col>
      </Row>
      <Row>
        <Col>
          <PhotoViewer data={photo} />
        </Col>
        <Col>
          <Info data={data} />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

const PhotoViewer = ({ data }) => {
  const { main, preview } = data
  const [current, setCurrent] = useState(main)

  const handleClick = (e, preview) => {
    if (window.innerWidth > theme.breakpoint) {
      setCurrent(preview)
    }
  }
  return (
    <PhotoWrapper>
      <ImageWrapper>
        <img src={current} />
      </ImageWrapper>
      <PreviewWrapper>
        {preview.map(src => {
          return (
            <ImageWrapper key={src}>
              <img src={src} onClick={e => handleClick(e, src)} />
            </ImageWrapper>
          )
        })}
      </PreviewWrapper>
    </PhotoWrapper>
  )
}

const Row = styled.div`
  @media (min-width: ${theme.breakpoint}px) {
    display: flex;
  }
`
const Col = styled.div`
  width: 100%;

  @media (min-width: ${theme.breakpoint}px) {
    width: 50%;
  }
`

const MainPhoto = styled.div`
  & img {
    width: 100%;
  }
  // max-height: 684px;
`

const PhotoPreviewList = ({ data, onClick }) => {
  return (
    <PreviewWrapper>
      {data.map(src => {
        return (
          <ImageWrapper>
            <img key={src} src={src} onClick={e => onClick(e, src)} />
          </ImageWrapper>
        )
      })}
    </PreviewWrapper>
  )
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

const PreviewWrapper = styled.div`
  display: flex;
  @media (min-width: ${theme.breakpoint}px) {
    margin: 16px 0 0 0;
  }
`

const ImageWrapper = styled.div`
  padding: 0 24px 0 0;
  height: 334px;
  &:last-child {
    padding: 0;
  }
  & img {
    height: 100%;
    display: block;
  }

  @media (min-width: ${theme.breakpoint}px) {
    height: auto;
    & img {
      width: 100%;
      display: block;
    }
  }
`
const PhotoWrapper = styled.div`
  display: flex;
  overflow-y: hidden;

  @media (min-width: ${theme.breakpoint}px) {
    display: block;
  }
`
