import React from 'react'

import { Heading, Text, Divider, Spacer } from '../../ui-kit'
import { Header } from '../../components'

export const BaseMainTemplate = ({ data, header }) => {
  return (
    <>
      <Header data={header} />
      <Heading>{data}</Heading>
      <Text>Всем хорошо в Шато</Text>
    </>
  )
}
