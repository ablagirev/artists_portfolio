import React from 'react'
import { Text, Money, theme, Spacer } from '@mts_bank/mtsbankui'
import styled from 'styled-components'

import { monthlyPayments } from '../utils'

export const Calculator = ({ months }) => {
  return (
    <Wrapper>
      <Block>
        <Label>Ежемесячный платеж</Label>
        <Money value={monthlyPayments[months].toString()} heading />
      </Block>
      <Spacer spacemob={28} />
      <Block>
        <Label>Сумма кредита</Label>
        <Money value="15000" heading />
      </Block>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 24px 0px;
  display: flex;
  justify-content: center;
  background: ${theme.colors.gray.g700};
`
const Label = styled(Text)`
  color: ${theme.colors.gray.g300};
`
const Block = styled.div``
