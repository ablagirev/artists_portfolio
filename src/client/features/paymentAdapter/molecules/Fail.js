import React, { useCallback, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import {
  Icon,
  theme,
  Container,
  Row,
  Heading,
  Col,
  Button,
  Text,
  Spacer
} from '@mts_bank/mtsbankui'

import { Warning } from 'assets/img/warning'
export const Fail = ({ title, description }) => {
  return (
    <OuterWrapper>
      <Wrapper centered={true}>
        <Container fluidmob={true}>
          <Row>
            <Col>
              <Spacer spacemob={52} />
              <Warning />
              <Spacer spacemob={12} />
              <Heading h={4}>{title}</Heading>
              <Spacer spacemob={8} />
              <StyledText sizemob="lg">{description}</StyledText>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </OuterWrapper>
  )
}

const StyledText = styled(Text)`
  color: ${theme.colors.gray.g300};
`

const OuterWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 16px;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ centered }) => (centered ? 'center' : 'normal')};
  text-align: center;

  * {
    box-sizing: border-box;
  }

  button {
    width: 100%;

    div {
      font-size: 16px;
    }
  }
`
const Header = styled.div`
  display: flex;
  min-height: 72px;
  width: 100%;
  background-color: ${theme.colors.red.primary};
  align-items: center;
  justify-content: center;
`
const Background = styled.div`
  opacity: ${({ show }) => (show ? 0.5 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  transition: all ${theme.transitions.basic};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: ${theme.colors.black};
  z-index: 1;
`
