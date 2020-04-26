/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react'
import styled from 'styled-components'
import Tilt from 'react-tilt'

import { Heading, Spacer } from 'ui-kit'
import { theme } from 'theme'
import { Link } from 'react-router-dom'

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

export const BaseMainTemplate = ({ data, background }) => {
  const { women, men } = data
  const [menOpacity, setMenOpacity] = useState(false)
  const [womenOpacity, setWomenOpacity] = useState(false)

  return (
    <Content>
      <ContentDesktop>
        <Spacer space={32} />
        <Wrapper>
          <WrapperWomen
            onMouseOver={() => setMenOpacity(true)}
            onMouseLeave={() => setMenOpacity(false)}
            isOpacity={womenOpacity}
          >
            <Tilt className="Tilt" options={imageHoverOptions}>
              <div className="Tilt-inner">
                <WrapperLink to="/actresses">
                  <HeadingWomen size="xxl" hover={menOpacity} headingFont>
                    {women.title}
                  </HeadingWomen>
                  <StyledImg src={women.picture} />
                </WrapperLink>
              </div>
            </Tilt>
          </WrapperWomen>
          <Spacer space={20} />
          <WrapperMen
            onMouseOver={() => setWomenOpacity(true)}
            onMouseLeave={() => setWomenOpacity(false)}
            isOpacity={menOpacity}
          >
            <Tilt className="Tilt" options={imageHoverOptions}>
              <div className="Tilt-inner">
                <WrapperLink to="/actors">
                  <StyledImg src={men.picture} />
                  <HeadingMen size="xxl" hover={womenOpacity} headingFont>
                    {men.title}
                  </HeadingMen>
                </WrapperLink>
              </div>
            </Tilt>
          </WrapperMen>
        </Wrapper>
      </ContentDesktop>

      <BackgroundImgDesktop>
        <img src={background.desktop} style={{ maxHeight: '320px' }} />
      </BackgroundImgDesktop>
      <BackgroundImgMobile>
        <img src={background.mobile} style={{ maxWidth: '500px' }} />
        <BureauText>
          <Heading size="xxl" color={theme.colors.white}>
            Бюро
            <br /> Маши <br />
            Поповой
          </Heading>
        </BureauText>
      </BackgroundImgMobile>
    </Content>
  )
}

const StyledImg = styled.img`
  transition: 500ms ease-in-out;
  @media (max-height: 800px) {
    max-height: 420px;
  }
  @media (max-height: 700px) {
    max-height: 300px;
  }
`

const BureauText = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
`

const BackgroundImgDesktop = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  @media (max-width: ${theme.breakpoint}px) {
    display: none;
  }
`

const BackgroundImgMobile = styled.div`
  display: none;
  img {
    width: 90%;
  }
  @media (max-width: ${theme.breakpoint}px) {
    display: block;
  }
`

const Content = styled.div`
  width: 100%;
  @media (max-width: ${theme.breakpoint}px) {
    display: flex;
    justify-content: initial;
    align-items: initial;
  }
`

const ContentDesktop = styled.div`
  @media (max-width: ${theme.breakpoint}px) {
    display: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  margin-bottom: 150px;
`

const WrapperWomen = styled.div`
  transition: 700ms ease-in-out;
  opacity: ${({ isOpacity }) => (isOpacity ? 0.5 : 1)};
`

const WrapperMen = styled.div`
  transition: 700ms ease-in-out;
  opacity: ${({ isOpacity }) => (isOpacity ? 0.5 : 1)};
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

const WrapperLink = styled(Link)`
  position: relative;
`
