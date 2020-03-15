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
    <Link to={path}>
      <Wrapper>
        <CardWrapper>
          <InfoWrapperDesktop>
            <Text size="md" color={theme.colors.blue.primary}>
              {`${firstName} ${lastName}, ${age.value}`}
            </Text>
          </InfoWrapperDesktop>
          <img src={photo.list} />
        </CardWrapper>
        <InfoWrapperMobile>
          <Text size="md" color={theme.colors.blue.primary}>
            {`${firstName} ${lastName}, ${age.value}`}
          </Text>
        </InfoWrapperMobile>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${theme.breakpoint}px) {
    align-items: center;
  }
`

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  & img {
    max-width: 322px;

    @media (max-width: 1200px) {
      max-width: 270px;
    }

    @media (max-width: ${theme.breakpoint}px) {
      max-width: 160px;
    }
  }

  @media (max-width: ${theme.breakpoint}px) {
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const InfoWrapperDesktop = styled.div`
  position: absolute;
  min-width: 270px;
  transform: rotate(-90deg);
  left: -50%;
  bottom: 31%;

  @media (max-width: 1200px) {
    left: -60%;
    bottom: 37%;
  }

  @media (max-width: ${theme.breakpoint}px) {
    display: none;
  }
`

const InfoWrapperMobile = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoint}px) {
    display: block;
  }
`
