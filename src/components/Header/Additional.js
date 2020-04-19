/* eslint-disable no-else-return */
import React from 'react'
import styled from 'styled-components'

import { theme } from 'theme'
import { Icon } from 'ui-kit/Icon'

export const Additional = ({ data }) => (
  <Contacts>
    {data.map(item => {
      if (item.type === 'post') {
        return (
          <a href={`mailto:${item.link}`} key={item.id}>
            <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
          </a>
        )
      } else if (item.type === 'cell') {
        return (
          <a href={`tel:${item.link}`} key={item.id}>
            <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
          </a>
        )
      } else {
        return (
          <a href={item.link} key={item.id} target="_blank">
            <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
          </a>
        )
      }
    })}
  </Contacts>
)

const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const CustomIcon = styled(Icon)`
  margin-left: 1em;
`
