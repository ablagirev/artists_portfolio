import React from 'react'
import { Row, Col } from 'antd'

import { ArtistPreview } from 'client/components'

export const BaseArtistListTemplate = ({ data }) => {
  const { rows, total, fetching } = data

  return (
    <Row>
      {rows.map((item, index) => {
        return (
          <Col key={index} span={8}>
            <ArtistPreview data={item} />
          </Col>
        )
      })}
    </Row>
  )
}
