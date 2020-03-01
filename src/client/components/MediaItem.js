import React, { useState } from 'react'
import styled from 'styled-components'

import { Modal, Text } from 'client/ui-kit'
import { theme } from 'client/theme'

export const MediaItem = ({ link, label }) => {
  const [visibility, setVisibility] = useState(false)
  const [content, setContent] = useState(null)
  const [isContentLoaded, setLoaded] = useState(false)
  const showModal = content => {
    setContent(content)
    setVisibility(true)
  }
  const onCancel = () => {
    setVisibility(false)
    setContent(null)
    setLoaded(false)
  }

  const handleLoad = () => {
    setLoaded(true)
  }

  const youtubeLink = content && `https://www.youtube.com/embed/${content}`
  return (
    <>
      <LinkWrapper onClick={() => showModal(link)}>
        <div>
          <Text>{label}</Text>
        </div>
      </LinkWrapper>
      {youtubeLink ? (
        <Modal visible={visibility} onCancel={onCancel} isContentLoaded={isContentLoaded}>
          <Iframe
            width="560"
            height="315"
            src={youtubeLink}
            frameBorder="0"
            allowFullScreen
            onLoad={handleLoad}
            isContentLoaded={isContentLoaded}
          ></Iframe>
        </Modal>
      ) : null}
    </>
  )
}

const LinkWrapper = styled.div`
  border-bottom: 1px ${theme.colors.gray.primary} solid;
  padding: 0 0 2px 0;
`

const Iframe = styled.iframe`
  display: ${({ isContentLoaded }) => (isContentLoaded ? 'block' : 'none')};
`
