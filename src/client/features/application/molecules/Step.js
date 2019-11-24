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
  Spacer,
  Flex
} from '@mts_bank/mtsbankui'

export const Step = ({ step, maxStep = 5, onPrevious }) => {
  return (
    <Wrapper>
      <Spacer spacemob={24}></Spacer>
      <Heading h={4}>Заявка на моментальный кредит - 15 000 ₽ </Heading>
      <Spacer spacemob={15}></Spacer>
      <Flex>
        {step !== 5 && (
          <Icon type="arrow_left" fill={theme.colors.gray.primary} onClick={onPrevious} />
        )}
        <Spacer space={8} />
        <StyledText bold>{`Шаг ${step} `}</StyledText>
        <StyledText bold subText>{`из ${maxStep}`}</StyledText>
      </Flex>
      <Spacer spacemob={17}></Spacer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 16px;
  background-color: ${theme.colors.gray.g700};
`
const StyledText = styled(Text)`
  margin-top: 1px;
  display: inline-block;
  color: ${({ subText }) => (subText ? theme.colors.gray.g400 : theme.colors.black)};
  white-space: pre;
`
