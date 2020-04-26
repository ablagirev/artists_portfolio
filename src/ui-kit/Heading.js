import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '../theme'

import { Text } from './Text'

export const Heading = ({
  children,
  className,
  color = theme.colors.blue.primary,
  size = 'lg',
  capitalize,
  bold,
  headingFont
}) => {
  return (
    <div className={className}>
      <Text size={size} color={color} capitalize={capitalize} bold={bold} headingFont={headingFont}>
        {children}
      </Text>
    </div>
  )
}

Heading.propTypes = {
  size: PropTypes.oneOf(['md', 'lg', 'xl', 'xxl', 'xxxl']),
  capitalize: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string
}
