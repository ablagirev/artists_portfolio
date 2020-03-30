/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Cell, Watsapp, Post, Facebook, Instagram } from './icons'

export const iconRegistry = {
  cell: Cell,
  watsapp: Watsapp,
  post: Post,
  facebook: Facebook,
  instagram: Instagram
}

export const Icon = ({ type, fill, stroke, fileType, size, ...rest }) => {
  const IconType = iconRegistry[type]
  return type && IconType ? (
    <IconWrapper {...rest} data-testid={`icon_${type}`}>
      <IconType fill={fill} stroke={stroke} fileType={fileType} size={size} />
    </IconWrapper>
  ) : null
}

const IconWrapper = styled.i`
  display: grid;
  justify-items: center;

  &:focus {
    outline: none;
  }

  & svg:focus {
    outline: none;
  }
`

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string
}
