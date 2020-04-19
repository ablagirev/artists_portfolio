/* eslint-disable react/prop-types */
import iconVideo from 'assets/icons/icon_video.svg'
import React from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import { MediaItem } from './MediaItem'

export const Media = ({ data }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <img src={iconVideo} />
      </IconWrapper>
      <LinksWrapper>
        {data
          .sort((a, b) => a.id - b.id)
          .map(({ label, link, id }, index) => {
            return <MediaItem key={`media-${index}`} label={label} link={link} />
          })}
      </LinksWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: none;
  width: 492px;
  margin: 32px 0 0 0;
  padding: 0;
  display: block;

  @media (max-width: ${theme.breakpoint}px) {
    display: flex;
    width: 100%;
    margin: 16px 0 0 0;
    padding: 8px 8px 12px 8px;
    background: ${theme.colors.blue.primary}10;
    flex-direction: column;
  }
`

const IconWrapper = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoint}px) {
    display: block;
  }
`

const LinksWrapper = styled.div`
  display: flex;
  height: 52px;
  border: ${theme.colors.gray.light}80 solid 1px;
  margin: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius};

  @media (max-width: ${theme.breakpoint}px) {
    margin: 8px 0 0 0;
    justify-content: space-around;
    border: none;
    height: 100%;
  }
`
