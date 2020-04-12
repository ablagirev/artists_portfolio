import React from 'react'
import styled from 'styled-components'
import { normalize, schema } from 'normalizr'

import { theme } from 'theme'
import { Icon, Text } from 'ui-kit'

export const Cell = ({ data }) => {
  const contactSchema = new schema.Entity('contact', {}, { idAttribute: 'type' })
  const normalizedData = normalize(data, [contactSchema]).entities
  const cell = normalizedData.contact ? normalizedData.contact.cell : null

  return cell ? (
    <CellLink href={`tel:${cell.link}`}>
      <CustomIcon type={cell.type} fill={theme.colors.gray.dark} />
      <CustomText color={theme.colors.gray.dark}>{cell.link}</CustomText>
    </CellLink>
  ) : null
}

const CellLink = styled.a`
  display: flex;
  flex-direction: row;
`

const CustomText = styled(Text)`
  text-align: center;
`

const CustomIcon = styled(Icon)`
  margin-left: 1em;
`
