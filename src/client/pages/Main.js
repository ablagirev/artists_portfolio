import React from 'react'

import { BaseMainTemplate } from 'client/templates'

export const Main = () => {
  const data = 'Главная страница'
  return <BaseMainTemplate data={data} />
}
