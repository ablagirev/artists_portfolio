import React from 'react'
import styled from 'styled-components'

import { theme } from 'theme'
import { Icon } from 'ui-kit/Icon'

export const Additional = ({ data }) => (
  <Contacts>
    {data.map(item => {
      return item.type === 'post' && item.type !== 'cell' ? (
        <a href={`mailto:${item.link}`} key={item.id}>
          <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
        </a>
      ) : (
        <a href={item.link} key={item.id}>
          <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
        </a>
      )
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
