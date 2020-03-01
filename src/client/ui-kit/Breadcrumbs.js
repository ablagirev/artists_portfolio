import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const renderBreadcrumbs = ({ url, nested, text }) => {
  if (nested) {
    return (
      <>
        <Breadcrumb.Item>
          <Link to={url}>{text}</Link>
        </Breadcrumb.Item>
        {renderBreadcrumbs(nested)}
      </>
    )
  } else if (text) {
    return <Breadcrumb.Item>{text}</Breadcrumb.Item>
  }
}

export const Breadcrumbs = ({ data }) => {
  return <Breadcrumb>{renderBreadcrumbs(data)}</Breadcrumb>
}
