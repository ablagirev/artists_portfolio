import React, { useCallback, Fragment } from 'react'
import styled from 'styled-components'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Heading, Button, Spacer, Divider, Text, Tag, theme } from '@mts_bank/mtsbankui'

export const Loading = ({ show }) => {
  return (
    <Wrapper show={show}>
      <Loader show={show}></Loader>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  transition: all ${theme.transitions.basic};
  background-color: ${theme.colors.white};

  * {
    box-sizing: border-box;
  }
`
const Loader = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  overflow: hidden;
  font-size: 10px;
  margin: 0;
  text-indent: -9999em;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${theme.colors.red.primary} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: load3 1.4s infinite linear;
  transform: translateZ(0);

  :before {
    width: 50%;
    height: 50%;
    background: ${theme.colors.red.primary};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    opacity: ${({ show }) => (show ? 1 : 0)};
    pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  }

  :after {
    opacity: ${({ show }) => (show ? 1 : 0)};
    pointer-events: ${({ show }) => (show ? 'all' : 'none')};
    background: ${theme.colors.white};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @keyframes load3 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
