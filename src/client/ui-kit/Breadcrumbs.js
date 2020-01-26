import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

import { urlMapping } from 'client/routes/names.js'

const renderBreadcrumbs = ({ url, nested, text }) => {
  const path = urlMapping[url] ? urlMapping[url] : urlMapping['default']
  if (nested) {
    return (
      <>
        <Breadcrumb.Item>
          <Link to={path}>{text}</Link>
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
