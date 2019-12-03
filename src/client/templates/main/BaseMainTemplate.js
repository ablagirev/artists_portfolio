import React from 'react'

import { Heading, Text, Divider } from '../../ui-kit'

export const BaseMainTemplate = ({ data }) => {
  return (
    <>
      <Heading>{data}</Heading>
      <Divider />
      <Text>{data}</Text>
    </>
  )
}
