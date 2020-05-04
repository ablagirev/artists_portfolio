/* eslint-disable no-else-return */
import React from 'react'
import styled from 'styled-components'

import { theme } from 'theme'
import { Icon, Text, Spacer } from 'ui-kit'
import { Popover } from 'antd'

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
        const phones = item.phones.map((contact, id) => {
          return (
            <PhonesWrapper key={contact.cell}>
              <Text>{contact.name}</Text>
              <Text>{contact.cell}</Text>
              {id === 0 ? <Spacer space={8} /> : null}
            </PhonesWrapper>
          )
        })
        return (
          <Popover content={phones} key={item.id} trigger="click">
            <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
          </Popover>
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
  cursor: pointer;
`

const PhonesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
