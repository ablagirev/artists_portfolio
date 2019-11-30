import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from 'theme'

const calcFontSize = size => {
  let fontSize = theme.font_sizes[size]
  return fontSize ? fontSize : theme.font_sizes['sm']
}

export const Text = ({
  children,
  className,
  color = theme.colors.gray.primary,
  size = 'md',
  sizemob = 'sm',
  capitalize = false,
  bold = false,
  ...rest
}) => {
  return (
    <Wrapper
      bold={bold}
      size={size}
      sizemob={sizemob}
      className={className}
      capitalize={capitalize}
      color={color}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: ${({ sizemob }) => calcFontSize(sizemob)}px;
  letter-spacing: ${theme.letter_spacing.md}px;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
  margin-top: 0;
  margin-bottom: 0;
  text-transform: ${({ capitalize }) => (capitalize ? 'uppercase' : null)};
  font-family: 'Proxima Nova', 'Arial', 'Helvetica', sans-serif;

  & * {
    font-family: 'Proxima Nova', 'Arial', 'Helvetica', sans-serif;
  }
  @media (min-width: ${theme.breakpoint}px) {
    font-size: ${({ size }) => calcFontSize(size)}px;
  }
`

Text.propTypes = {
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  sizemob: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  capitalize: PropTypes.bool,
  bold: PropTypes.bool
}
