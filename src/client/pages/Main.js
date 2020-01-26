import React from 'react'

import { BaseMainTemplate } from 'client/templates'
import women from 'assets/img/main/women.png'
import men from 'assets/img/main/men.png'

const data = {
  women: {
    picture: women,
    title: 'Актрисы',
    link: '#'
  },
  men: {
    picture: men,
    title: 'Актеры',
    link: '#'
  }
}

export const Main = () => {
  return <BaseMainTemplate data={data} />
}
