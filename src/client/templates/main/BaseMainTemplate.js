import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Tilt from 'react-tilt'

import { Heading, Loader } from '../../ui-kit'
import { Header, Footer } from '../../components'
import { theme } from '../../theme'

const imageHoverOptions = {
  reverse: false,
  max: 2,
  scale: 1.09,
  speed: 3000,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)'
}

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
              <Tilt className="Tilt" options={imageHoverOptions}>
                <div className="Tilt-inner">
                  <WrapperLink href="/actresses">
                    <HeadingWomen size="xxl" hover={menOpacity}>
                      {women.title}
                    </HeadingWomen>
                    <img src={women.picture} />
                  </WrapperLink>
                </div>
              </Tilt>
            </WrapperWomen>
            <WrapperMen
              onMouseOver={() => setWomenOpacity(true)}
              onMouseLeave={() => setWomenOpacity(false)}
              opacity={menOpacity}
            >
              <Tilt className="Tilt" options={imageHoverOptions}>
                <div className="Tilt-inner">
                  <WrapperLink href="/actors">
                    <img src={men.picture} />
                    <HeadingMen size="xxl" hover={womenOpacity}>
                      {men.title}
                    </HeadingMen>
                  </WrapperLink>
                </div>
              </Tilt>
            </WrapperMen>
          </Wrapper>
        </ContentDesktop>
        <ContentMobile>
          <BackgroundImg src={background.mobile} />
          <ContentMobileInner>
            <Heading size="xxl" color={theme.colors.white}>
              БЮРО
            </Heading>
            <Heading size="xxl" color={theme.colors.white} bold>
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
  height: 100vh;
  z-index: -1;
`

const Content = styled.div`
  @media (max-width: ${theme.breakpoint}px) {
    height: 100%;
    display: flex;
    padding-bottom: 50px;
  }
`

const ContentDesktop = styled.div`
  @media (max-width: ${theme.breakpoint}px) {
    display: none;
  }
`

const ContentMobile = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoint}px) {
    position: relative;
    display: block;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 520px;
`

const WrapperWomen = styled.div`
  position: absolute;
  right: 51%;
  transition: 700ms ease-in-out;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};

  img {
    height: 448px;
  }
`

const WrapperMen = styled.div`
  position: absolute;
  left: 51%;
  transition: 700ms ease-in-out;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};

  img {
    height: 448px;
  }
`

const HeadingWomen = styled(Heading)`
  position: absolute;
  top: 50%;
  bottom: 0;
  left: -6em;
  transition: 1100ms ease-in-out;

  ${WrapperWomen}:hover & {
    top: -1em;
    bottom: 8em;
  }
`

const HeadingMen = styled(Heading)`
  position: absolute;
  top: 50%;
  bottom: 0;
  right: -6em;
  transition: 1100ms ease-in-out;

  ${WrapperMen}:hover & {
    top: -1em;
    bottom: 8em;
  }
`

const WrapperLink = styled.a`
  position: relative;
`
