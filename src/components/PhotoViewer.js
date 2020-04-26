import React, { useState } from 'react'
import styled from 'styled-components'

import { theme } from 'theme'

export const PhotoViewer = ({ data }) => {
  const { profile } = data
  const [current, setCurrent] = useState(profile[0])

  const handleClick = (e, profile) => {
    if (window.innerWidth > theme.breakpoint) {
      setCurrent(profile)
    }
  }
  return (
    <PhotoWrapper>
      <MainImageWrapper>
        <img src={current} />
      </MainImageWrapper>
      <PreviewWrapper>
        {profile.map(src => {
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

const PhotoWrapper = styled.div`
  display: flex;

  padding: 0 24px 0 0;
  overflow-y: hidden;
  @media (max-width: ${theme.breakpoint}px) {
  }
`
const MainImageWrapper = styled.div`
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

  @media (max-width: ${theme.breakpoint}px) {
    display: none;
  }
`
const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: ${theme.breakpoint}px) {
    flex-direction: row;
    cursor: none;
  }
`
const ImageWrapper = styled.div`
  width: 52px;
  height: auto;
  padding: 16px 0 0 0;

  &:first-child {
    padding-top: 0;
  }

  & img {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoint}px) {
    padding: 0 24px 0 0;
    height: 334px;
    width: 100%;

    & img {
      width: auto;
      height: 100%;
      display: block;
    }
  }
`
