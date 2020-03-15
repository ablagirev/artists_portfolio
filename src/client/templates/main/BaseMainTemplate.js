import React, { useState } from 'react'
import styled from 'styled-components'
import Tilt from 'react-tilt'

import { Heading, Spacer } from '../../ui-kit'
import { theme } from '../../theme'
import { Layout } from '../../components'

const imageHoverOptions = {
  reverse: false,
  max: 2,
  scale: 1.15,
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
    <Layout>
      <Content>
        <ContentDesktop>
          <Spacer space={32} />
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
            <Spacer space={20} />
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
    </Layout>
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
  height: 100%;
  z-index: -1;
`

const Content = styled.div`
  width: 100%;
  @media (max-width: ${theme.breakpoint}px) {
    display: flex;
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
    display: flex;
    height: 100vh;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`

const WrapperWomen = styled.div`
  transition: 700ms ease-in-out;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};
`

const WrapperMen = styled.div`
  transition: 700ms ease-in-out;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};
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
