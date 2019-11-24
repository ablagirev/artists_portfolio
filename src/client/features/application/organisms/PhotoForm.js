import React, { useCallback, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { useMappedState } from 'redux-react-hook'
import { theme, Text, Spacer, Heading, Button } from '@mts_bank/mtsbankui'

import { renderFileUpload } from '../atoms/AdaptedInputs'
import { required } from '../validation'

import { Camera } from 'assets/img/camera'
import { Description } from 'features/application/molecules'

const firstPageImg = 'assets/img/firstPage.png'
const registrationImg = 'assets/img/registration.png'
const selfieImg = 'assets/img/selfie.png'

// todo вынести конфиг в корень компонента
const attachmentFields = [
  {
    name: 'firstPage',
    title: 'Первая страница',
    description:
      'Должны быть видны серия и номер паспорта, кем и когда выдан, ФИО, место рождения и фото',
    preview: firstPageImg
  },
  {
    name: 'registration',
    title: 'Страница с пропиской',
    description: 'Это следующий разворот. Должен быть четко виден адрес регистрации.',
    preview: registrationImg
  },
  {
    name: 'selfie',
    title: 'Селфи с первой страницей',
    description: 'Держите раскрытый на первой странице паспорт рядом с собой.',
    preview: selfieImg
  }
]

export let PhotoForm = ({ handleSubmit, dispatch, change }) => {
  const mapState = useCallback(state => ({
    errors: state.form.photo.syncErrors
  }))
  const { errors } = useMappedState(mapState)

  const onFileUpload = (name, data) => {
    const [file] = data.length > 0 ? data : []
    // todo выпилить type_name, type_code - должны на бэке проставляться
    dispatch(change(name, { type_name: name, type_code: name, file })) // todo договориться с бэком о едином формате (camelCase)
  }

  const onFileRemove = name => {
    dispatch(change(name, {}))
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Spacer spacemob={24} />
        <Heading h={5}>Сфотографируйте паспорт</Heading>
        <Spacer spacemob={4} />
        <Text sizemob="lg">
          Мы проверим, что введенные вами данные верны, чтобы сразу отправить вам деньги{' '}
        </Text>
        <Spacer spacemob={16} />
        {attachmentFields.map((item, index) => {
          const { name, title, description, preview } = item
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const areaRef = useRef()

          return (
            <div key={index}>
              <PhotoUpload>
                <PhotoInfo>
                  <Description title={title} description={description} />
                  <PhotoExample src={preview} />
                </PhotoInfo>
                <Field
                  name={name}
                  onFileUpload={data => onFileUpload(name, data)}
                  onFileRemove={() => onFileRemove(name)}
                  areaRef={areaRef}
                  component={renderFileUpload}
                  validate={[required]}
                />
                <PhotoButton
                  enabled={errors && errors[name]}
                  onClick={() => areaRef.current.click()}
                >
                  <StyledText sizemob="lg">Сделать фото</StyledText>
                  <Camera fill={theme.colors.blue.primary} />
                </PhotoButton>
              </PhotoUpload>
              <Spacer spacemob={32} />
            </div>
          )
        })}

        <Button type="submit" disabled={!!errors}>
          Далее
        </Button>
        <Spacer spacemob={16} />
      </form>
    </Wrapper>
  )
}

const PhotoUpload = styled.div``

const PhotoInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
const PhotoExample = styled.img`
  min-width: 112px;
  margin-left: 16px;
`

const PhotoButton = styled.div`
  display: ${({ enabled }) => (enabled ? 'flex' : 'none')};
  width: 100%;
  padding: 14px 12px 14px 18px;
  box-sizing: border-box;
  justify-content: space-between;
  border: 2px solid ${theme.colors.blue.primary};
  border-radius: 4px;
  color: ${theme.colors.blue.primary};
`
const StyledText = styled(Text)`
  line-height: 21px;
  user-select: none;
`
PhotoForm = reduxForm({
  form: 'photo',
  initialValues: {
    firstPage: {},
    registration: {},
    selfie: {}
  },
  destroyOnUnmount: false
})(PhotoForm)

const Wrapper = styled.div`
  width: 100%;
`
