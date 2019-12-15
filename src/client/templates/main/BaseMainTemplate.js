import React from 'react'

import { Heading, Text } from '../../ui-kit'
import { Header, Footer } from '../../components'

export const BaseMainTemplate = ({ data, header, footer }) => {
  return (
    <>
      <Header data={header} />
      <Heading>{data}</Heading>
      <Text>Всем хорошо в Шато</Text>
      <Footer data={footer} />
    </>
  )
}
