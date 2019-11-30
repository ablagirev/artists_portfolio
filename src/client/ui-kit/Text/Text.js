import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../../theme'

export const Text = ({
  children,
  className,
  color = theme.colors.gray.primary,
  size = 'xs',
  sizemob = 'xxs',
  capitalize,
  bold
}) => {
  return (
    <Wrapper
      bold={bold}
      size={size}
      sizemob={sizemob}
      className={className}
      capitalize={capitalize}
      color={color}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: ${({ size }) => theme.font_sizes[size]}px;
  letter-spacing: ${theme.letter_spacing.md}px;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
  text-transform: ${({ capitalize }) => (capitalize ? 'uppercase' : null)};
  font-family: 'Proxima Nova', 'Arial', 'Helvetica', sans-serif;

  & * {
    font-family: 'Proxima Nova', 'Arial', 'Helvetica', sans-serif;
  }
  @media (max-width: ${theme.breakpoint}px) {
    font-size: ${({ sizemob }) => theme.font_sizes[sizemob]}px;
  }
`

Text.propTypes = {
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  sizemob: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  capitalize: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string
}
