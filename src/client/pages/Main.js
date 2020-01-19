import React from 'react'

import { BaseMainTemplate } from 'client/templates'


export const Main = () => {
  const data = 'Добро пожаловать в Шато Хуито'
  return <BaseMainTemplate data={data} />
}
