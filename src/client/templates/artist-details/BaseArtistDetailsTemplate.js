import React, { useState } from 'react'
import { Breadcrumb, Row, Col } from 'antd'
import styled from 'styled-components'

import { theme } from 'client/theme'
import { Header } from 'client/components/Header'
import { Footer } from 'client/components/Footer'
import { Media } from 'client/components/Media'
import { General } from 'client/components/General'
import { Education } from 'client/components/Education'
import { FullName } from 'client/components/FullName'
import { Skills } from 'client/components/Skills'
import { Theatre } from 'client/components/Theatre'
import { Filmography } from 'client/components/Filmography'

export const BaseArtistDetailsTemplate = ({ data }) => {
  const { photo } = data
  // console.log(111, data)
  return (
    <>
      <Header />
      <ContentWrapper>
        <Row>
          <Col>
            <Breadcrumb />
          </Col>
        </Row>
        <Row>
          <Col lg={10}>
            <PhotoViewer data={photo} />
          </Col>
          <Col lg={14}>
            <Info data={data} />
          </Col>
        </Row>
      </ContentWrapper>
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

const Info = ({ data }) => {
  const {
    firstName,
    lastName,
    middleName,
    age,
    height,
    city,
    media,
    education,
    skills,
    theatre,
    filmography
  } = data

  const fullName = `${lastName} ${firstName} ${middleName}`
  const general = { age, height, city }

  return (
    <GeneralWrapper>
      <FullName data={{ fullName }} />
      <Media data={media} />
      <General data={general} />
      <Education data={{ education }} />
      <Skills data={{ skills }} />
      <Theatre data={{ theatre }} />
      <Filmography data={{ filmography }} />
    </GeneralWrapper>
  )
}

const ContentWrapper = styled.div`
  padding: 0 18px;

  @media (min-width: ${theme.breakpoint}px) {
    padding: 0 140px;
  }
`

const GeneralWrapper = styled.div`
  width: 100%;
  margin: 0 0 64px 0;
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
  width: 100%;
  &:last-child {
    padding: 0;
  }

  & img {
    height: 100%;
    display: block;
  }

  @media (min-width: ${theme.breakpoint}px) {
    width: 52px;
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
    width: 338px;
    height: auto;

    &:last-child {
      padding: 0;
    }

    & img {
      width: 100%;
    }
  }
`
