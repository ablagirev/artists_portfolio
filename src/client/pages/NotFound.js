import React from 'react'

import { BaseNotFoundTemplate } from 'client/templates'

export const NotFound = () => {
  const data = '404'
  return <BaseNotFoundTemplate data={data} />
}
