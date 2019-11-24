import { results } from 'constants'

import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Spacer, Divider, Heading, theme, Text, Icon } from '@mts_bank/mtsbankui'

import { Documents } from '../molecules/Documents'

import { Success } from 'assets/img/success'
import { Error } from 'assets/img/error'

export const Result = ({ data, status }) => {
  const result = results.filter(result => {
    return result.code === status.code
  })[0]
  return (
    <React.Fragment>
      <Wrapper>
        <ResultWrapper>
          <Spacer space={72} spacemob={72}></Spacer>
          {result.type === 'Success' && <Success></Success>}
          {result.type === 'Error' && <Error></Error>}
          <Heading h={4}>{result.text}</Heading>
          <Text sizemob="lg">{result.subText}</Text>
          <Spacer space={72} spacemob={72}></Spacer>
        </ResultWrapper>
      </Wrapper>
      {status.code === 1000 && (
        <React.Fragment>
          <Divider></Divider>
          <Documents documents={data.documents}></Documents>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

const ResultWrapper = styled.div`
  text-align: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }
`
