import React, { useCallback, Fragment } from 'react'
import styled from 'styled-components'
import { theme, Spacer, Text } from '@mts_bank/mtsbankui'
import InputMask from 'react-input-mask'

import { InputLabel } from './InputLabel'
import { InputControl } from './InputControl'

export const Input = ({
  label,
  info,
  tooltip,
  disabled,
  readOnly,
  placeholder,
  maskChar = '_',
  type = 'text',
  error,
  errorMsg,
  value,
  mask,
  hidden = false,
  onChange,
  inputRef,
  children,
  size = 'lg',
  clear,
  onClear,
  clearTreshold,
  guide = false,
  alwaysShowMask = false,
  onFocus,
  onClick,
  ...rest
}) => {
  const labelProps = {
    label,
    info,
    tooltip
  }
  const inputProps = {
    ref: inputRef,
    mask,
    disabled,
    readOnly,
    placeholder,
    type,
    onChange,
    value
  }
  const controlProps = {
    clear,
    value,
    onClear,
    clearTreshold,
    size
  }

  return (
    <Wrapper data-testid="input" hidden={hidden}>
      {label && <InputLabel {...labelProps} />}
      <InputBodyWrapper size={size} error={error} disabled={disabled} readOnly={readOnly}>
        {mask ? (
          <InputMask
            alwaysShowMask={alwaysShowMask}
            maskChar={maskChar}
            {...inputProps}
            {...rest}
            onClick={e => {
              onClick && onClick(e)
            }}
            onFocus={e => {
              onFocus && onFocus(e)
            }}
          />
        ) : (
          <input {...inputProps} {...rest} />
        )}
        {clear && onClear && <InputControl {...controlProps} />}
        {children}
      </InputBodyWrapper>
      {!label && !tooltip && info && (
        <Fragment>
          <Spacer space={theme.spacings.xs4} />
          <InputLabel {...labelProps} />
        </Fragment>
      )}
      {error && (
        <Error>
          <Spacer space={theme.spacings.xs4} />
          {errorMsg}
        </Error>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Error = styled(Text)`
  color: ${theme.colors.orange.primary};
`

const InputBodyWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  transition: all ${theme.transitions.basic};
  pointer-events: ${({ disabled, readOnly }) => (disabled || readOnly ? 'none' : 'all')};
  width: 100%;
  height: ${({ size }) => theme.sizes.greater[size]}px;
  border: 2px solid transparent;
  border-color: ${({ disabled, readOnly, error }) =>
    disabled || readOnly
      ? theme.colors.gray.g700
      : error
      ? theme.colors.orange.primary
      : theme.colors.gray.g400};
  border-radius: ${theme.radiuses.basic}px;
  background-color: ${({ disabled, readOnly }) =>
    disabled || readOnly ? theme.colors.gray.g700 : theme.colors.white};

  :hover {
    border-color: ${({ disabled, error }) =>
      error
        ? theme.colors.orange.hover
        : disabled
        ? theme.colors.gray.g700
        : theme.colors.gray.g300};
  }

  :focus-within {
    border-color: ${({ error }) =>
      error ? theme.colors.orange.primary : theme.colors.gray.primary};
  }

  input {
    box-sizing: border-box;
    outline: none;
    border: 0;
    width: inherit;
    border-radius: 2px;
    padding: ${({ size }) => (size === 'lg' ? '12px 50px 12px 18px' : '10px 42px 10px 14px')};
    font-size: ${({ size }) => theme.font_sizes[size]}px;
    line-height: ${({ size }) => (size === 'lg' ? 24 : 20)}px;
    font-family: 'MTS Sans', 'Arial', 'Helvetica', sans-serif;
    background-color: ${({ readOnly }) => (readOnly ? theme.colors.gray.g700 : theme.colors.white)};
    color: ${({ disabled }) => (disabled ? theme.colors.gray.g300 : theme.colors.gray.primary)};

    ::placeholder {
      color: ${theme.colors.gray.g300};
      opacity: 1;
    }

    :disabled {
      background-color: ${theme.colors.gray.g700};
    }
  }
`
