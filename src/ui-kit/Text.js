import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../theme'

const calcMobSize = {
  xxs: 'xxs',
  xs: 'xs',
  sm: 'xs',
  md: 'xxs',
  lg: 'xs',
  xl: 'md',
  xxl: 'xl',
  xxxl: 'xxl'
}

export const Text = ({
  children,
  className,
  color = theme.colors.gray.primary,
  size = 'xs',
  capitalize,
  bold,
  headingFont
}) => {
  return (
    <Wrapper
      bold={bold}
      size={size}
      sizemob={calcMobSize[size]}
      className={className}
      capitalize={capitalize}
      color={color}
      headingFont={headingFont}
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
  font-family: ${({ headingFont }) => (headingFont ? "'Playfair Display', serif" : "'Montserrat', sans-serif")};

  & * {
    font-family: 'Montserrat', sans-serif;
  }
  @media (max-width: ${theme.breakpoint}px) {
    font-size: ${({ sizemob }) => theme.font_sizes[sizemob]}px;
  }
`

Text.propTypes = {
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  capitalize: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string
}
