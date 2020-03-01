import React from 'react'
import styled from 'styled-components'

import { MediaItem } from './MediaItem'

import { theme } from 'client/theme'
import iconVideo from 'client/assets/icons/icon_video.svg'

export const Media = ({ data }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <img src={iconVideo} />
      </IconWrapper>
      <LinksWrapper>
        {data.map(({ label, link }, index) => {
          return <MediaItem key={`media-${index}`} label={label} link={link} />
        })}
      </LinksWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 16px 0 0 0;
  padding: 8px 8px 12px 8px;
  background: ${theme.colors.blue.light};
  flex-direction: column;

  @media (min-width: ${theme.breakpoint}px) {
  }
`

const IconWrapper = styled.div``

const LinksWrapper = styled.div`
  display: flex;
  margin: 8px 0 0 0;
  justify-content: space-around;
`
