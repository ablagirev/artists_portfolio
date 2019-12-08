import React from 'react'
import styled from 'styled-components'

import { Text } from '../ui-kit'

export const ArtistPreview = ({ data }) => {
  const { firstName, lastName, age, img } = data
  console.log(111, img)
  return (
    <Wrapper>
      <Info>
        <Text>{`${firstName} ${lastName}, ${age}`}</Text>
      </Info>
      <Image url={img} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 70px;
`

const Image = ({ url }) => {
  return (
    <ImageWrapper>
      <img src={url} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  height: 100px;
  width: 50px;
`

const Info = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
`
