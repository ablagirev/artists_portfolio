import React from 'react'
import { CardInput } from '@mts_bank/mtsbankui'

export const CardField = ({ input, meta, ...rest }) => {
  const { value, onChange } = input
  const { touched, error } = meta
  return (
    <CardInput
      {...input}
      autoComplete="nope"
      value={value}
      onChange={onChange}
      error={(touched || value.length === 19) && !!error}
      errorMsg={error}
      {...rest}
    ></CardInput>
  )
}
