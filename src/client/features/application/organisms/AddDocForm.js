import React, { useCallback, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { reduxForm, Field, getFormSyncErrors, getFormValues } from 'redux-form'
import { useMappedState } from 'redux-react-hook'
import { Button, Heading, Spacer } from '@mts_bank/mtsbankui'

import { renderInput, renderSelect } from '../atoms/AdaptedInputs'
import { required } from '../validation'
import { docsOptions } from '../utils'

export let AddDocDorm = ({ showModal, handleSubmit, form }) => {
  const mapState = useCallback(state => {
    const errors = getFormSyncErrors(form)(state)
    const { addDocType } = getFormValues(form)(state) || {}

    return {
      errors: Object.keys(errors).length,
      docType: addDocType
    }
  })
  const { errors, docType } = useMappedState(mapState)

  return (
    <form onSubmit={handleSubmit}>
      <Spacer spacemob={24} />
      <Heading h={5}>Дополнительный документ</Heading>
      <Spacer spacemob={14} />
      <Field
        name="addDocType"
        placeholder="Выберите документ"
        options={docsOptions}
        component={renderSelect}
      />
      {docType && docType.value === 'snils' && (
        <React.Fragment>
          <Spacer spacemob={16} />
          <Field
            name="snils"
            label="Номер СНИЛС"
            mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            placeholder="000-000-000-00"
            component={renderInput}
            validate={[required]}
          />
        </React.Fragment>
      )}
      {docType && docType.value === 'inn' && (
        <React.Fragment>
          <Spacer spacemob={16} />
          <Field
            name="inn"
            label="Номер ИНН"
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
            placeholder="000000000000"
            component={renderInput}
            validate={[required]}
          />
        </React.Fragment>
      )}
      <Spacer spacemob={16} />
      <Heading h={5}>Кодовое слово</Heading>
      <Spacer spacemob={14} />
      <Field
        name="secretWord"
        placeholder={'Придумайте кодовое слово'}
        component={renderInput}
        validate={[required]}
      />
      <Spacer spacemob={24} />
      <Button type="submit" disabled={!!errors}>
        Далее
      </Button>
      <Spacer spacemob={16} />
    </form>
  )
}

AddDocDorm = reduxForm({
  form: 'application',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(AddDocDorm)
