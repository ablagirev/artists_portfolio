import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { theme, Divider, Spacer, Heading } from '@mts_bank/mtsbankui'

import { Documents } from '../molecules/Documents'
import { Parameters } from '../molecules/Parameters'

import { Form } from './Form'

export const SignForm = ({ data, common, scrollTop, setDoc }) => {
  const { parameters, documents, customer } = data
  return (
    <Wrapper>
      <Spacer space={64} />
      <Heading h={3}>
        {customer.firstname} {customer.middlename},
      </Heading>
      <Spacer space={8} />
      <Parameters parameters={parameters}></Parameters>
      <Divider></Divider>
      <Form ip={common.ip} uid={data.uid} scrollTop={scrollTop}></Form>
      <Divider></Divider>
      <Documents setDoc={setDoc} documents={documents}></Documents>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 0;

  * {
    box-sizing: border-box;
  }
`
