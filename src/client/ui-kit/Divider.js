import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from '../theme'

export const Divider = ({ className, color }) => {
  return <Wrapper className={className} color={color} />
}

const Wrapper = styled.div`
  height: 2px;
  border-radius: 3px;
  width: 100%;
  background-color: ${({ color }) => (color ? color : theme.colors.blue.primary)};
`

Divider.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string
}
