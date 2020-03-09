import React from 'react'
import { Breadcrumb as AntBreadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { theme } from '../theme'

const renderBreadcrumbs = ({ url, nested, text }) => {
  if (nested) {
    return (
      <>
        <AntBreadcrumb.Item>
          <Link to={url}>{text}</Link>
        </AntBreadcrumb.Item>
        {renderBreadcrumbs(nested)}
      </>
    )
  } else if (text) {
    return <AntBreadcrumb.Item>{text}</AntBreadcrumb.Item>
  }
}

export const Breadcrumbs = ({ data }) => {
  return (
    <BreadcrumbWrapper>
      <AntBreadcrumb>{renderBreadcrumbs(data)}</AntBreadcrumb>
    </BreadcrumbWrapper>
  )
}

const BreadcrumbWrapper = styled.div`
  padding-bottom: 1em;

  @media (max-width: ${theme.breakpoint}px) {
    padding: 1em;
  }
`
