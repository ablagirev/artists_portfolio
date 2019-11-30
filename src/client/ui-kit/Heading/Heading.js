import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '../Text'
import { theme } from '../../theme'

const fontSize = {
  sm: 'lg',
  md: 'xl',
  lg: 'xxl'
}

export const Heading = ({
  children,
  className,
  color = theme.colors.blue.primary,
  size = 'md',
  sizemob = 'sm',
  capitalize,
  bold
}) => {
  return (
    <div className={className}>
      <Text
        size={fontSize[size]}
        sizemob={fontSize[sizemob]}
        color={color}
        capitalize={capitalize}
        bold={bold}
      >
        {children}
      </Text>
    </div>
  )
}

Text.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  sizemob: PropTypes.oneOf(['sm', 'md', 'lg']),
  capitalize: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string
}
