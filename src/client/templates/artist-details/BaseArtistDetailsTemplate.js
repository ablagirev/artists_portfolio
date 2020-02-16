import React, { useState } from 'react'
import { Breadcrumb, Row, Col } from 'antd'
import styled from 'styled-components'

import { theme } from 'client/theme'
import { Header } from 'client/components/Header'
import { Footer } from 'client/components/Footer'
import { Media } from 'client/components/Media'
import { Heading, Text } from 'client/ui-kit'

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
        <Col lg={12}>
          <PhotoViewer data={photo} />
        </Col>
        <Col lg={12}>
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
      <MainImageWrapper>
        <img src={current} />
      </MainImageWrapper>
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

const RowWrapper = styled.div`
  @media (min-width: ${theme.breakpoint}px) {
    display: flex;
  }
`
const ColWrapper = styled.div`
  width: 100%;

  @media (min-width: ${theme.breakpoint}px) {
    //width: 100%;
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
  const { firstName, lastName, middleName, age, height, city, media } = data
  const fullName = `${lastName} ${firstName} ${middleName}`

  return (
    <>
      <GeneralInfo>
        <Row>
          <Col>
            <FullName>
              <Heading size="md" color={theme.colors.blue.primary}>
                {fullName}
              </Heading>
            </FullName>
          </Col>
        </Row>
        <Row>
          <Col>
            <Media data={media} />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text color={theme.colors.blue.primary}>Возраст:</Text>
          </Col>
          <Col span={6}>
            <Text>{age}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text color={theme.colors.blue.primary}>Рост:</Text>
          </Col>
          <Col span={6}>
            <Text>{height}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text color={theme.colors.blue.primary}>Город:</Text>
          </Col>
          <Col span={6}>
            <Text>{city}</Text>
          </Col>
        </Row>
      </GeneralInfo>
    </>
  )
}

const FullName = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  justify-content: center;
  @media (min-width: ${theme.breakpoint}px) {
    margin: 0;
    justify-content: start;
  }
`

const GeneralInfo = styled.div`
  width: 100%;
`

const PreviewWrapper = styled.div`
  display: flex;
  @media (min-width: ${theme.breakpoint}px) {
    flex-direction: column;
    //flex: 1;
  }
`

const ImageWrapper = styled.div`
  padding: 0 24px 0 0;
  height: 334px;
  width: 100%         ;
  &:last-child {
    padding: 0;         
  }
  & img {
    height: 100%;
    display: block;
  }

  @media (min-width: ${theme.breakpoint}px) {
    width: 70px;
    height: auto;

    padding: 16px 0 0 0;
    &:first-child {
      padding: 0;
    }
    &:last-child {
      padding: 16px 0 0 0;
    }
    & img {
      width: 100%;
    }
  }
`
const PhotoWrapper = styled.div`
  display: flex;
  overflow-y: hidden;

  @media (min-width: ${theme.breakpoint}px) {
    padding: 0 24px 0 0;
  }
`
const MainImageWrapper = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoint}px) {
    display: block;
    padding: 0 24px 0 0;
    height: auto;

    &:last-child {
      padding: 0;
    }

    & img {
      width: 100%;
    }
  }
`
