import { Spacer, Text } from '@mts_bank/mtsbankui'
import React from 'react'

export const Description = ({ title, description }) => {
  return (
    <div>
      <Text bold size="md">
        {title}
      </Text>
      <Spacer spacemob={4} />
      <Text size="md">{description}</Text>
    </div>
  )
}
