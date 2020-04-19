import React from 'react'
import styled from 'styled-components'

import { theme } from '../../theme'

export const BaseNotFoundTemplate = ({ data }) => {
  const text = 'Такой страницы не существует'

  return (
    <NotFoundWrapper>
      <NotFound>
        <span data-text="4">4</span>
        <span data-text="0">0</span>
        <span data-text="4">4</span>
      </NotFound>
    </NotFoundWrapper>
  )
}

const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.blue.primary};
  margin: 0;
  padding: 0;
  height: 100vh;
`

const NotFound = styled.p`
  color: ${theme.colors.white};
  font-size: 10em;
  font-weight: 700;

  span {
    display: inline-block;
    position: relative;
    transform-style: preserve-3d;
    perspective: 500;
    -webkit-font-smoothing: antialiased;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      left: -1px;
      transform-origin: left top;
      transition: all ease-out 0.3s;
      content: attr(data-text);
    }

    &::before {
      z-index: 1;
      color: rgba(0, 0, 0, 0.1);
      transform: scale(1.1, 1) skew(0deg, 20deg);
    }

    &::after {
      z-index: 2;
      color: ${theme.colors.blue.primary};
      text-shadow: -1px 0 1px ${theme.colors.blue.primary}, 1px 0 1px rgba(0, 0, 0, 0.3);
      transform: rotateY(-25deg);
    }

    &:hover {
      &::before {
        transform: scale(1.1, 1) skew(0deg, 5deg);
      }

      &::after {
        transform: rotateY(-10deg);
      }
    }
  }
`
