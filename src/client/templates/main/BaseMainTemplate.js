import React, { useState } from 'react'
import styled from 'styled-components'

import { Heading, Spacer } from '../../ui-kit'
import { Header, Footer } from '../../components'

export const BaseMainTemplate = ({ data }) => {
  const { women, men } = data
  const [menOpacity, setMenOpacity] = useState(false)
  const [womenOpacity, setWomenOpacity] = useState(false)
  return (
    <>
      <Header />
      <Body>
        <Wrapper>
          <WrapperWomen
            onMouseOver={() => setMenOpacity(true)}
            onMouseLeave={() => setMenOpacity(false)}
            opacity={womenOpacity}
          >
            <WrapperLink href="#">
              <HeadingWomen size="lg" hover={menOpacity}>
                {women.title}
              </HeadingWomen>
              <img src={women.picture} />
            </WrapperLink>
          </WrapperWomen>
          <Spacer space={20} />
          <WrapperMen
            onMouseOver={() => setWomenOpacity(true)}
            onMouseLeave={() => setWomenOpacity(false)}
            opacity={menOpacity}
          >
            <WrapperLink href="#">
              <img src={men.picture} />
              <HeadingMen size="lg" hover={womenOpacity}>
                {men.title}
              </HeadingMen>
            </WrapperLink>
          </WrapperMen>
        </Wrapper>
      </Body>
      <Footer />
    </>
  )
}

const Body = styled.div`
  padding: 32px 0 110px 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 610px;
`

const WrapperWomen = styled.div`
  position: absolute;
  right: 51%;
  transition: 700ms ease-in-out;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};

  &:hover {
    transition: 700ms ease-in-out;
    right: 44%;
    top: -1%;
    z-index: 1;

    img {
      transition: 700ms ease-in-out;
      height: 670px;
    }
  }
`

const WrapperMen = styled.div`
  position: absolute;
  left: 51%;
  transition: 700ms ease-in-out;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};

  &:hover {
    transition: 700ms ease-in-out;
    left: 44%;
    top: -1%;
    z-index: 1;

    img {
      transition: 700ms ease-in-out;
      height: 670px;
    }
  }
`

const HeadingWomen = styled(Heading)`
  position: absolute;
  top: ${({ hover }) => (hover ? 'unset' : '50%')};
  bottom: ${({ hover }) => (hover ? '8em' : 'unset')};
  left: -6em;
  transition: 700ms ease-in-out;
`

const HeadingMen = styled(Heading)`
  position: absolute;
  top: ${({ hover }) => (hover ? 'unset' : '50%')};
  bottom: ${({ hover }) => (hover ? '8em' : 'unset')};
  right: -6em;
  transition: 700ms ease-in-out;
`

const WrapperLink = styled.a`
  position: relative;
`
