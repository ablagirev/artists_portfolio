import React from 'react'
import styled from 'styled-components'

import { Heading, Text, Spacer } from '../../ui-kit'
import { Header, Footer } from '../../components'

import women from 'assets/img/main/women.png'
import men from 'assets/img/main/men.png'

export const BaseMainTemplate = ({ data }) => {
  return (
    <>
      <Header />
      <Spacer space={32} />
      <Body>
        <WrapperImg>
          <a href="#">
            <HeadingWomen size="lg">Актрисы</HeadingWomen>
            <img src={women} />
          </a>
        </WrapperImg>
        <Spacer space={20} />
        <WrapperImg>
          <a href="#">
            <img src={men} />
            <HeadingMen size="lg">Актеры</HeadingMen>
          </a>
        </WrapperImg>
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
`

const WrapperImg = styled.div`
  position: relative;
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
