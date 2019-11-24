import React from 'react'
import { ConfirmationField } from '@mts_bank/mtsbankui'

export const CodeField = ({ input, meta, resendCode, ...rest }) => {
  const { value, onChange } = input
  const { touched, error } = meta
  return (
    <ConfirmationField
      topText="Подтвердите перевод кодом из СМС"
      timer={true}
      fields={4}
      autoFocus={false}
      type="number"
      fieldWidth={32}
      fieldHeight={38}
      timerDuration={30}
      onComplete={async (code, showErr) => {}}
      onChange={res => onChange && onChange(res)}
      onSendCodeClick={resendCode}
    />
  )
}
