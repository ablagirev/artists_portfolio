import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon, Text, Spacer, theme } from '@mts_bank/mtsbankui'

import { AutoCompleteField } from '../molecules/AutoCompleteField'

export const Search = ({
  label,
  search,
  onCancel,
  onConfirm,
  onSuggestionSelected,
  getSuggestionValue,
  suggestType,
  placeholder,
  ...rest
}) => {
  const [value, setValue] = useState('')
  return (
    <SearchWrapper search={search}>
      <InnerWrapper>
        <ControlsWrapper>
          <BackIcon onClick={onCancel}>
            <Icon type="arrow_left"></Icon>
            <Text sizemob="lg">Назад</Text>
          </BackIcon>
          <StyledText sizemob="lg">{label}</StyledText>
          <DoneText show={!!onConfirm} confirm={value.length > 0} onClick={onConfirm} sizemob="lg">
            Готово
          </DoneText>
        </ControlsWrapper>
        <Spacer spacemob={33}></Spacer>
        {search && (
          <AutoCompleteField
            value={value}
            onChange={setValue}
            placeholder={placeholder}
            suggestType={suggestType}
            mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            component={AutoCompleteField}
            autoFocus
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            {...rest}
          ></AutoCompleteField>
        )}
      </InnerWrapper>
    </SearchWrapper>
  )
}

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  padding-left: 10px;
  padding-right: 15px;
`
const StyledText = styled(Text)`
  padding-right: 35px;
`
const BackIcon = styled.div`
  display: flex;
`
const DoneText = styled(Text)`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all ${theme.transitions.basic};
  color: ${({ confirm }) => (confirm ? theme.colors.black : theme.colors.gray.g600)};
`
const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
`
const SearchWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${theme.colors.white};
  opacity: ${({ search }) => (search ? 1 : 0)};
  pointer-events: ${({ search }) => (search ? 'all' : 'none')};
  transition: all ${theme.transitions.basic};
  padding: 0 16px;
`
