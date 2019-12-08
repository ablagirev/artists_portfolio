import React from 'react'

import { Heading, Text, Divider, Spacer } from '../../ui-kit'
import { Header } from '../../components'

export const BaseMainTemplate = ({ data, header }) => {
  return (
    <>
      <Header data={header} />
      <Heading>{data}</Heading>
      <Spacer space={100} />
      <Divider />
      <Text>{data}</Text>
    </>
  )
}
