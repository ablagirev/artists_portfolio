import React, { useState } from 'react'
import styled from 'styled-components'

import { Heading, Spacer } from '../../ui-kit'
import { Header, Footer } from '../../components'
import { theme } from '../../theme'

export const BaseMainTemplate = ({ data }) => {
  const { women, men, background } = data
  const [menOpacity, setMenOpacity] = useState(false)
  const [womenOpacity, setWomenOpacity] = useState(false)
  return (
    <>
      <Header />
      <Content>
        <ContentDesktop>
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
            {/* <Spacer space={20} /> */}
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
        </ContentDesktop>
        <ContentMobile>
          <BackgroundImg src={background.mobile} />
          <ContentMobileInner>
            <Heading size="xl" color={theme.colors.white}>
              БЮРО
            </Heading>
            <Heading size="lg" color={theme.colors.white} bold>
              Маши
              <br />
              Поповой
            </Heading>
          </ContentMobileInner>
        </ContentMobile>
      </Content>
      <Footer />
    </>
  )
}

const ContentMobileInner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 8px;
`

const BackgroundImg = styled.img`
  position: absolute;
  width: 220px;
  height: 592px;
  z-index: -1;
`

const Content = styled.div`
  min-height: 720px;
  @media (max-width: ${theme.breakpoint}px) {
    min-height: 600px;
  }
`

const ContentDesktop = styled.div`
  padding: 32px 0 110px 0;
  @media (max-width: ${theme.breakpoint}px) {
    display: none;
  }
`

const ContentMobile = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoint}px) {
    position: relative;
    display: block;
    /* height: 100vh; */
  }
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
    right: 46%;
    top: 15%;
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
    left: 46%;
    top: 15%;
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
