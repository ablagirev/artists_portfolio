import React, { useState } from 'react'
import styled from 'styled-components'

import { Heading, Text, Spacer } from '../../ui-kit'
import { Header, Footer } from '../../components'

import women from 'assets/img/main/women.png'
import men from 'assets/img/main/men.png'

export const BaseMainTemplate = ({ data }) => {
  const [menOpacity, setMenOpacity] = useState(false)
  const [womenOpacity, setWomenOpacity] = useState(false)
  return (
    <>
      <Header />
      <Spacer space={32} />
      <Body>
        <WrapperWomen
          onMouseOver={() => setMenOpacity(true)}
          onMouseLeave={() => setMenOpacity(false)}
          opacity={womenOpacity}
        >
          <WrapperLink href="#">
            <HeadingWomen size="lg">Актрисы</HeadingWomen>
            <img src={women} />
          </WrapperLink>
        </WrapperWomen>
        <Spacer space={20} />
        <WrapperMen
          onMouseOver={() => setWomenOpacity(true)}
          onMouseLeave={() => setWomenOpacity(false)}
          opacity={menOpacity}
        >
          <WrapperLink href="#">
            <img src={men} />
            <HeadingMen size="lg">Актеры</HeadingMen>
          </WrapperLink>
        </WrapperMen>
      </Body>
      <Spacer space={71} />
      <Footer />
    </>
  )
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 610px;
`

const WrapperWomen = styled.div`
  position: absolute;
  right: 51%;
  transition: 1s ease-in-out;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};

  &:hover {
    transition: 1s ease-in-out;
    right: 44%;
    top: -1%;
    z-index: 1;

    img {
      transition: 1s ease-in-out;
      height: 670px;
    }
  }
`

const WrapperMen = styled.div`
  position: absolute;
  left: 51%;
  transition: 1s ease-in-out;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};

  &:hover {
    transition: 1s ease-in-out;
    left: 44%;
    top: -1%;
    z-index: 1;

    img {
      transition: 1s ease-in-out;
      height: 670px;
    }
  }
`

const HeadingWomen = styled(Heading)`
  position: absolute;
  top: 50%;
  left: -6em;
`

const HeadingMen = styled(Heading)`
  position: absolute;
  top: 50%;
  right: -6em;
`

const WrapperLink = styled.a`
  position: relative;
`
