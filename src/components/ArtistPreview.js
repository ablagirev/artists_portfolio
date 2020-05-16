import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

import { Text } from 'ui-kit'
import { theme } from 'theme'
import { getAgeFromBirthDate } from '../helpers'

export const ArtistPreview = ({ data }) => {
  const { id, firstName, lastName, birth, photo } = data
  const age = getAgeFromBirthDate(birth)
  const { type } = useParams()

  const path = `/${type}/${id}`

  return (
    <Link to={path}>
      <Wrapper>
        <CardWrapper>
          <InfoWrapperDesktop>
            <Text size="md" color={theme.colors.blue.primary}>
              {`${firstName} ${lastName}, ${age}`}
            </Text>
          </InfoWrapperDesktop>
          <img src={photo} />
        </CardWrapper>
        <InfoWrapperMobile>
          <Text size="md" color={theme.colors.blue.primary}>
            {`${firstName} ${lastName}, ${age}`}
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
    margin-bottom: 4px;
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
