import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { theme } from 'client/theme'
import iconVideo from 'client/assets/icons/icon_video.svg'
import { Text } from 'client/ui-kit'

export const Media = ({ data }) => {
  return (
    <Row>
      <Col>
        <Wrapper>
          <IconWrapper>
            <img src={iconVideo} />
          </IconWrapper>
          <LinksWrapper>
            {data.map(({ label, link }, index) => {
              return (
                <LinkWrapper key={`media-${index}`}>
                  <StyledText size="md">{label}</StyledText>
                </LinkWrapper>
              )
            })}
          </LinksWrapper>
        </Wrapper>
      </Col>
    </Row>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 16px 0 0 0;
  padding: 8px 8px 12px 8px;
  background: ${theme.colors.blue.primary}10;
  flex-direction: column;

  @media (min-width: ${theme.breakpoint}px) {
    background: none;
    width: 492px;
    margin: 32px 0 0 0;
    padding: 0;
    display: block;
  }
`

const IconWrapper = styled.div`
  @media (min-width: ${theme.breakpoint}px) {
    display: none;
  }
`

const LinksWrapper = styled.div`
  display: flex;
  margin: 8px 0 0 0;
  justify-content: space-around;

  @media (min-width: ${theme.breakpoint}px) {
    height: 52px;
    border: ${theme.colors.gray.light}80 solid 1px;
    margin: 0;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.radius};
  }
`
const StyledText = styled(Text)`
  @media (min-width: ${theme.breakpoint}px) {
    text-transform: uppercase;
    text-align: center;
    color: ${theme.colors.blue.primary};
  }
`

const LinkWrapper = styled.div`
  cursor: pointer;
  border-bottom: 1px ${theme.colors.gray.primary} solid;
  padding: 0 0 2px 0;

  @media (min-width: ${theme.breakpoint}px) {
    flex: 1;
    height: 100%;
    align-items: center;
    align-content: center;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fbfbfb;

    &:hover {
      background: ${theme.colors.blue.primary};

      & ${StyledText} {
        color: ${theme.colors.white};
      }
    }
  }
`
