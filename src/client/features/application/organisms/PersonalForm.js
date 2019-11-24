import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Field, reduxForm, getFormValues, getFormSyncErrors } from 'redux-form'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Button, Heading, Text, Spacer } from '@mts_bank/mtsbankui'

import {
  email,
  name,
  required,
  birthday,
  russianLetters,
  russianLettersAndNumbers
} from '../validation'
import { genderOptions, sliderMarks, infoAgree, historyAgree, dataAgree } from '../utils'
import { Calculator } from '../atoms/Calculator'
import {
  renderInput,
  renderSlider,
  renderRadioGroup,
  renderCheckbox,
  renderDateField
} from '../atoms/AdaptedInputs'

export let PersonalForm = ({ handleSubmit, form }) => {
  const mapState = useCallback(state => {
  const errors = getFormSyncErrors(form)(state)

    return {
      errors: Object.keys(errors).length,
      values: getFormValues(form)(state) || {}
    }
  })
  const { errors, values } = useMappedState(mapState)
  const { months } = values

  return (
    <form autoComplete="nope" onSubmit={handleSubmit}>
      <Spacer spacemob={24} />
      <Heading h={5}>Выберите срок кредита</Heading>
      <Spacer spacemob={30} />
      <Text sizemob="sm">Срок кредита, месяцев</Text>
      <Spacer spacemob={12} />
      <Field
        name="months"
        step={null}
        min={3}
        max={12}
        included={false}
        marks={sliderMarks}
        component={renderSlider}
      />
      <Spacer spacemob={56} />
      <Calculator months={months} />
      <Spacer spacemob={38} />
      <Heading h={5}>Персональная информация</Heading>
      <Spacer spacemob={24} />
      <Field
        name="fio"
        placeholder="Иванов Иван Иванович"
        label="Фамилия,имя и отчество"
        component={renderInput}
        validate={[required, name, russianLetters]}
      />
      <Spacer spacemob={16} />
      <Field
        name="email"
        placeholder="email@address.com"
        label="Электронная почта"
        component={renderInput}
        validate={[required, email]}
      />
      <Spacer spacemob={16} />
      <Text bold size="md">
        Ваш пол
      </Text>
      <Spacer spacemob={8} />
      <Field name="gender" options={genderOptions} component={renderRadioGroup} />
      <Spacer spacemob={16} />
      <Field
        name="birthday"
        label="Дата рождения"
        inputMode="numeric"
        component={renderDateField}
        validate={[required, birthday]}
      />
      <Spacer spacemob={16} />
      <Field
        name="birthPlace"
        placeholder="Как в паспорте"
        label="Место рождения"
        component={renderInput}
        validate={[required, russianLettersAndNumbers]}
      />
      <Spacer spacemob={16} />
      <Field name="infoAgree" children={infoAgree} component={renderCheckbox} />
      <Spacer spacemob={16} />
      <Field
        name="dataAgree"
        children={dataAgree}
        component={renderCheckbox}
        validate={[required]}
        noStyleError
      />
      <Spacer spacemob={16} />
      <Field
        name="historyAgree"
        children={historyAgree}
        component={renderCheckbox}
        validate={[required]}
        noStyleError
      />
      <Spacer spacemob={16} />
      <Button type="submit" disabled={!!errors}>
        Далее
      </Button>
      <Spacer spacemob={16} />
    </form>
  )
}

PersonalForm = reduxForm({
  form: 'application',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PersonalForm)

const Wrapper = styled.form``
