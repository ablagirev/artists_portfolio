import React from 'react'

import { Heading, Text, Divider, Spacer } from '../../ui-kit'

export const BaseMainTemplate = ({ data }) => {
  return (
    <>
      <Heading>{data}</Heading>
      <Spacer space={100} />
      <Divider />
      <Text>{data}</Text>
    </>
  )
}
