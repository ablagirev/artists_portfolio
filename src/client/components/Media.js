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
                  <a href={link}>
                    <Text size="md" capitalize={true}>
                      {label}
                    </Text>
                  </a>
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
  background: ${theme.colors.blue.light};
  flex-direction: column;

  @media (min-width: ${theme.breakpoint}px) {
    background: none;
    width: 492px;
    margin: 32px 0 0 0;
  }
`

const IconWrapper = styled.div`
  @media (min-width: ${theme.breakpoint}px) {
    display: none;
  }
`

const LinksWrapper = styled.div`
  margin: 8px 0 0 0;
  justify-content: space-around;

  @media (min-width: ${theme.breakpoint}px) {
    display: flex;
    border: #f3f3f5 solid 1px;
    height: 52px;
    align-items: center;
    justify-content: center;
  }
`

const LinkWrapper = styled.div`
  border-bottom: 1px ${theme.colors.gray.primary} solid;
  padding: 0 0 2px 0;

  @media (min-width: ${theme.breakpoint}px) {
    //width: 100%;
    //height: 100%;
    //display: flex;
    //align-items: center;
    //justify-content: stretch;
    border: none;
    &:hover {
      background: ${theme.colors.blue.primary};
      opacity: 80%;
      color: ${theme.colors.blue.primary};
    }
  }
`
