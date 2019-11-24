import React, { useCallback, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Icon, Spacer, Row, Col, theme } from '@mts_bank/mtsbankui'

export const DeliveryPicker = ({ options, handler, value }) => {
  const deliveryOptions = options.map(option => {
    return (
      <DeliveryOption
        selected={value === option.value}
        onClick={handler}
        name={option.value}
        key={option.value}
      >
        {option.label}
        <StyledIcon selected={value === option.value} type="check" fill={theme.colors.white} />
      </DeliveryOption>
    )
  })

  return <Wrapper>{deliveryOptions}</Wrapper>
}

const StyledIcon = styled(Icon)`
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: ${theme.colors.red.primary};
  border-top-right-radius: ${theme.radiuses.basic}px;
  border-bottom-left-radius: ${theme.radiuses.basic}px;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  transition: all ${theme.transitions.basic};
`

const DeliveryOption = styled.div`
  font-family: 'MTS Sans';
  font-size: 14px;
  line-height: 20px;
  border-radius: ${theme.radiuses.basic}px;
  border: 2px solid;
  border-color: ${({ selected }) => (selected ? theme.colors.red.primary : theme.colors.gray.g500)};
  padding: 16px 20px;
  transition: all ${theme.transitions.basic};
  position: relative;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 9px;
  max-height: 140px;
`
