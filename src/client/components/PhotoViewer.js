import React, { useState } from 'react'
import styled from 'styled-components'

import { theme } from 'client/theme'

export const PhotoViewer = ({ data }) => {
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
const PreviewWrapper = styled.div`
  display: flex;
  @media (min-width: ${theme.breakpoint}px) {
    flex-direction: column;
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
