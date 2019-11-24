import React, { useCallback, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading, Spacer, Money, Text, theme } from '@mts_bank/mtsbankui'

export const Parameters = ({ parameters }) => {
  const params = parameters.map((parameter, i) => {
    return (
      <Wrapper key={i}>
        <StyledText>{parameter.name}</StyledText>
        <Spacer space={8} />
        <Heading h={4}>{parameter.value}</Heading>
        <Spacer space={44} />
      </Wrapper>
    )
  })
  return (
    <Wrapper>
      <Spacer space={32} />
      <Heading h={5}>Параметры вашего кредита</Heading>
      <Spacer space={32} />
      {params}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  box-sizing: border-box;
`
const StyledText = styled(Text)`
  color: ${theme.colors.gray.g300};
`

Parameters.propTypes = {}
