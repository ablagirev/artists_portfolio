import React from 'react'
import styled from 'styled-components'

import { Text } from 'client/ui-kit'
import { theme } from 'client/theme'

export const ArtistPreview = ({ data }) => {
  const { firstName, lastName, age, img } = data

  return (
    <Wrapper>
      <ArtistInfo>
        <Text size="lg" color={theme.colors.blue.primary}>
          {`${firstName} ${lastName}, ${age}`}
        </Text>
      </ArtistInfo>
      <Image path={`${img}`} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
`

const Image = ({ path }) => {
  return (
    <ImageWrapper>
      <img src={path} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  & img {
    width: 334px;
    height: 402px;
  }

  margin: 0 0 0 23px;
`

const ArtistInfo = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
`
