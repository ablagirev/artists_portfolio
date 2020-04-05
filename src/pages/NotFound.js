import React from 'react'

import { BaseNotFoundTemplate } from 'templates'

export const NotFound = () => {
  const data = '404'
  return <BaseNotFoundTemplate data={data} />
}
