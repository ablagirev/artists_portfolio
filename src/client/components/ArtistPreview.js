import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

import { Text } from 'client/ui-kit'
import { theme } from 'client/theme'

export const ArtistPreview = ({ data }) => {
  const { id, firstName, lastName, age, photo } = data
  const { type } = useParams()

  // const path = `/${type}/${id}`
  const path = `/actresses/${id}`

  return (
    <Link to={path} >
      <Wrapper>
        <InfoWrapper>
          <Text size="md" color={theme.colors.blue.primary}>
            {`${firstName} ${lastName}, ${age.value}`}
          </Text>
        </InfoWrapper>
        <ImageWrapper>
          <img src={photo.list} />
        </ImageWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
`

const ImageWrapper = styled.div`
  & img {
    width: 334px;
    height: 402px;
  }
  margin: 0 0 0 23px;
`

const InfoWrapper = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  line-height: 0;
`
