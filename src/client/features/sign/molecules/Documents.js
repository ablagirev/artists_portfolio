import React from 'react'
import styled from 'styled-components'
import { saveAs } from 'file-saver'
import { Heading, Button, Spacer, Link, Text, Tag, theme } from '@mts_bank/mtsbankui'

export const Documents = ({ documents, setDoc }) => {
  const base64ToFile = dataURI => {
    const byteString = atob(dataURI)
    const ab = new ArrayBuffer(byteString.length)
    let ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ab], { type: 'application/pdf' })
  }
  const docs = documents.map((doc, i) => {
    return (
      <OuterWrapper key={i}>
        <InnerWrapper>
          <Spacer spacemob={16}></Spacer>
          <Span>
            <StyledText
              onClick={() => {
                setDoc(base64ToFile(doc.data))
              }}
              sizemob={'lg'}
            >{`${doc.name} `}</StyledText>
            <StyledTag hoverable={false} size={'sm'}>{`.${doc.extension}`}</StyledTag>
          </Span>
          <Spacer spacemob={16} />
        </InnerWrapper>
        <div>
          <StyledButton
            type="submit"
            onClick={() => {
              saveAs(base64ToFile(doc.data), `${doc.name}.pdf`)
            }}
            fluid
          >
            Скачать
          </StyledButton>
        </div>
      </OuterWrapper>
    )
  })
  return (
    <Wrapper>
      <Spacer space={32} />
      <Heading h={4}>Документы</Heading>
      <DocsWrapper>{docs}</DocsWrapper>
      <Spacer space={32} />
    </Wrapper>
  )
}
const Span = styled.span``
const InnerWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const OuterWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  flex-basis: 0;
  @media (min-width: ${theme.breakpoints.sm}px) {
    min-width: 320px;
    max-width: 320px;
  }
`

const DocsWrapper = styled.div`
  display: block;
  @media (min-width: ${theme.breakpoints.sm}px) {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    flex-basis: auto;
    flex-wrap: wrap;
  }
`

const StyledText = styled(Text)`
  display: inline;
`
const StyledButton = styled(Button)`
  div {
    width: 100%;
  }
`
const StyledTag = styled(Tag)`
  display: inline-block;
`
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
`
