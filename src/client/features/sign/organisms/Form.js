import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'redux-react-hook'
import { Spacer, Heading, Text, Button } from '@mts_bank/mtsbankui'

import { Input } from '../atoms/Input'
import { signActions } from '../reducer'

const phoneRegexp = /^(\+7)?[\s-]?\(?[9][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/
const codeRegexp = /[0-9]{4}/

export const Form = ({ status, uid, ip, scrollTop }) => {
  const dispatch = useDispatch()
  const [phone, setPhone] = useState('+7')
  const [code, setCode] = useState('')
  const [errors, setErrors] = useState({
    phone: false,
    code: false
  })
  const checkForErrors = (str, regexp) => {
    return !str.match(regexp) || str === ''
  }
  const signHandler = async () => {
    scrollTop()
    if (!errors.phone && !errors.code && phone.length > 0 && code.length > 0) {
      dispatch(signActions.signRequest({ uid, phone, code, ip }))
    } else {
      const phoneErr = checkForErrors(phone, phoneRegexp)
      const codeErr = checkForErrors(code, codeRegexp)
      setErrors({
        phone: phoneErr,
        code: codeErr
      })
    }
  }
  const newCodeHandler = () => {
    if (!errors.phone && phone.length === 18) {
      dispatch(signActions.getNewCode({ uid, phone, ip }))
    } else {
      setErrors({ ...errors, phone: checkForErrors(phone, phoneRegexp) })
    }
  }
  const setCaret = (e, target) => {
    const pos = e.target.value.indexOf('_')
    if (e.target.selectionStart > pos && pos > 0) {
      e.target.selectionStart = e.target.value.indexOf('_')
      e.target.selectionEnd = e.target.value.indexOf('_')
    }
  }
  return (
    <Wrapper>
      <Spacer space={32} />
      <Text sizemob="lg">Для завершения процесса оформления кредита, введите свои данные:</Text>
      <Spacer space={32} />
      <Input
        pattern="[0-9]*"
        inputMode="numeric"
        type="text"
        error={errors.phone}
        errorMsg={'Введите корректный номер'}
        label={'Телефон'}
        mask="+7 (999) 999-99-99"
        maskChar={'_'}
        alwaysShowMask={true}
        onFocus={e => {
          setCaret(e, 'phone')
        }}
        onClick={e => {
          setCaret(e, 'phone')
        }}
        onBlur={() => {
          checkForErrors(phone, phoneRegexp) && setErrors({ ...errors, phone: true })
        }}
        value={phone}
        onChange={e => {
          e.target.value.length > 0 && setPhone(e.target.value)
          setErrors({ ...errors, phone: false })
        }}
      />
      <Spacer space={32} />
      <Input
        pattern="[0-9]*"
        inputMode="numeric"
        type="text"
        error={errors.code}
        errorMsg={'Введите корректный код'}
        label={'Ваш индивидуальный код из SMS'}
        mask="9999"
        maskChar={'_'}
        alwaysShowMask={true}
        onBlur={() => checkForErrors(code, codeRegexp) && setErrors({ ...errors, code: true })}
        value={code}
        onClick={e => {
          setCaret(e, 'code')
        }}
        onFocus={e => {
          setCaret(e, 'code')
        }}
        onChange={e => {
          setCode(e.target.value)
          setErrors({ ...errors, code: false })
        }}
      />
      <Spacer space={56} />
      {status !== 1004 && (
        <StyledButton onClick={newCodeHandler} type="secondary">
          <Text bold size="lg">
            Получить новый код
          </Text>
        </StyledButton>
      )}
      <Spacer space={56} />
      <StyledButton type="submit" onClick={signHandler}>
        <Text bold size="lg">
          Подписать
        </Text>
      </StyledButton>
      <Spacer space={64} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  box-sizing: border-box;

  input {
    font-size: 16px;
  }

  button {
    width: 100%;

    div {
      font-size: 16px;
    }
  }
`

const StyledButton = styled(Button)`
  div {
    width: 100%;
  }
`
Form.propTypes = {}
