import React, { useState } from 'react'
import {
  AttachArea,
  Slider,
  Input,
  Radio,
  Checkbox,
  TextArea,
  Spacer,
  AutoComplete,
  Select
} from '@mts_bank/mtsbankui'
import styled from 'styled-components'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd.mm.yyyy')

export const renderSelect = ({ input, options, ...rest }) => {
  const { value, onChange } = input
  return <Select value={value} onChange={onChange} options={options} {...rest} />
}
export const renderSlider = ({ input, ...rest }) => {
  const { value, onChange } = input
  return (
    <SliderWrapper>
      <Slider {...rest} value={parseInt(value)} onChange={onChange}></Slider>
    </SliderWrapper>
  )
}

export const renderInput = ({ input, meta, ...rest }) => {
  const { value, onChange } = input
  const { touched, error } = meta
  return (
    <Input
      {...input}
      autoComplete="nope"
      value={value}
      onChange={onChange}
      error={touched && !!error}
      errorMsg={error}
      {...rest}
    ></Input>
  )
}

export const renderRadioGroup = ({ input, options, hidden, children, ...rest }) => {
  const { value, onChange } = input
  const handler = e => {
    onChange && onChange(e.target.getAttribute('name'))
  }
  const radios = options.map(option => {
    return (
      <HiddenWrapper hidden={hidden} key={option.value}>
        <RadioWrapper>
          <Radio name={option.value} radioHandler={handler} isChecked={value === option.value}>
            {option.label}
          </Radio>
        </RadioWrapper>
        <Spacer spacemob={32} />
      </HiddenWrapper>
    )
  })

  return (
    <React.Fragment>
      {hidden && React.cloneElement(children, { options, handler, value })}
      <RadioGroup>{radios}</RadioGroup>
    </React.Fragment>
  )
}
export const renderCheckbox = ({ input, meta, children, errorMessage, noStyleError, ...rest }) => {
  const { value, onChange } = input
  const { error } = meta
  const handler = () => {
    onChange && onChange(!value)
  }

  return (
    <Checkbox
      {...input}
      {...meta}
      size={'sm'}
      isChecked={!!value}
      onChange={handler}
      error={!!error && !noStyleError}
      errorMessage={error ? errorMessage : null}
      {...rest}
    >
      {children}
    </Checkbox>
  )
}

export const renderTextArea = ({ input, meta, ...rest }) => {
  const { value, onChange } = input
  const { touched, error } = meta
  return (
    <TextArea
      {...input}
      value={value}
      onChange={onChange}
      error={touched && !!error}
      errorMsg={error}
      {...rest}
    />
  )
}

export const renderDateField = ({ input, meta, ...rest }) => {
  const { value, onChange } = input
  const { touched, error } = meta
  return (
    <Input
      {...input}
      keepCharPositions={true}
      value={value}
      onChange={onChange}
      mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
      guide={!!value}
      placeholder={'ДД.ММ.ГГГГ'}
      pipe={autoCorrectedDatePipe}
      error={touched && !!error}
      errorMsg={error}
      {...rest}
    />
  )
}
export const renderFileUpload = ({ input, meta, areaRef, onFileUpload, onFileRemove, ...rest }) => {
  return (
    <Hidden>
      <AttachArea
        areaRef={areaRef}
        withPreview={true}
        enabled={true}
        maxFileSize={10000000}
        onFileUpload={onFileUpload}
        onFileRemove={onFileRemove}
        imagesOnly={true}
        multiple={false}
      />
    </Hidden>
  )
}
const Hidden = styled.div`
  > *:first-child {
    display: none;
  }
`
const RadioGroup = styled.div`
  display: flex;
  align-items: flex-start;
`
const RadioWrapper = styled.div``

const HiddenWrapper = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
`
const SliderWrapper = styled.div`
  .rc-slider-handle {
    transform: none !important;
  }
`
