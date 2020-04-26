import React, { useState } from 'react'
import styled from 'styled-components'

import { Modal, Text } from 'ui-kit'
import { theme } from 'theme'

export const MediaItem = ({ link, label }) => {
  const [visibility, setVisibility] = useState(false)
  const [isContentLoaded, setLoaded] = useState(false)

  const showModal = () => {
    setVisibility(true)
  }

  const onCancel = () => {
    setVisibility(false)
    setLoaded(false)
  }

  const handleLoad = () => {
    setLoaded(true)
  }

  const youtubeLink = link && `https://www.youtube.com/embed/${link}`

  return (
    <>
      <LinkWrapper onClick={showModal} link={link}>
        <StyledText link={link}>{label}</StyledText>
      </LinkWrapper>

      {youtubeLink && visibility ? (
        <Modal visible={visibility} onCancel={onCancel} isContentLoaded={isContentLoaded}>
          <Iframe
            width="560"
            height="315"
            src={youtubeLink}
            frameBorder="0"
            allowFullScreen
            onLoad={handleLoad}
            isContentLoaded={isContentLoaded}
          />
        </Modal>
      ) : null}
    </>
  )
}

const StyledText = styled(Text)`
  text-transform: uppercase;
  text-align: center;
  color: ${({ link }) => (link ? theme.colors.blue.primary : '#CAD5D9')};

  @media (max-width: ${theme.breakpoint}px) {
    text-transform: none;
    color: ${({ link }) => (link ? theme.colors.gray.primary : '#CAD5D9')};
  }
`

const LinkWrapper = styled.div`
  cursor: ${({ link }) => (link ? 'pointer' : 'not-allowed')};
  padding: 0 5px;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ link }) => (link ? '#fbfbfb' : theme.colors.white)};

  &:hover {
    background: ${({ link }) => (link ? theme.colors.blue.primary : theme.colors.white)};

    & ${StyledText} {
      color: ${({ link }) => (link ? theme.colors.white : '#CAD5D9')};
    }
  }

  @media (max-width: ${theme.breakpoint}px) {
    border-bottom: ${({ link }) => `1px ${link ? theme.colors.gray.primary : '#CAD5D9'} solid`};
    padding: 0 0 2px 0;
    background: none;
    flex: none;

    &:hover {
      background: none;

      & ${StyledText} {
        color: ${({ link }) => (link ? theme.colors.gray.primary : '#CAD5D9')};
      }
    }
  }
`

const Iframe = styled.iframe`
  display: ${({ isContentLoaded }) => (isContentLoaded ? 'block' : 'none')};

  @media (max-width: ${theme.breakpoint}px) {
    width: auto;
    height: auto;
  }
`
