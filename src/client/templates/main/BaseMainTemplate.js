import React from 'react'

import { Heading } from '../../ui-kit/Heading'
import { Text } from '../../ui-kit/Text'

export const BaseMainTemplate = ({ data }) => {
  return (
    <>
      <Heading>{data}</Heading>
      <Text>{data}</Text>
    </>
  )
}
