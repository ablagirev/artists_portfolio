import React from 'react'
import { Breadcrumb as AntBreadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { theme } from '../theme'
import { Text } from './Text'

const renderBreadcrumbs = ({ url, nested, text }) => {
  const data = []

  return url ? [...data, { url, text }, ...renderBreadcrumbs(nested)] : [...data, { text }]
}

export const Breadcrumbs = ({ data, style }) => {
  const breadcrumbs = renderBreadcrumbs(data)

  return (
    <BreadcrumbWrapper>
      <AntBreadcrumb style={style}>
        {breadcrumbs.map(({ url, text }, index) => (
          <AntBreadcrumb.Item key={index}>
            {url ? <CustomLink to={url}>{text}</CustomLink> : <CustomText>{text}</CustomText>}
          </AntBreadcrumb.Item>
        ))}
      </AntBreadcrumb>
    </BreadcrumbWrapper>
  )
}

const BreadcrumbWrapper = styled.div`
  padding-bottom: 1em;

  @media (max-width: ${theme.breakpoint}px) {
    padding: 1em 0;
  }
`

const CustomLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
`

const CustomText = styled(Text)`
  display: inline-block;
`
