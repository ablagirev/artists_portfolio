import React from 'react'

import { BaseMainTemplate } from 'client/templates'
import women from 'assets/img/main/women.png'
import men from 'assets/img/main/men.png'
import backgroundMobile from 'assets/img/main/background_main_mob.png'

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
  },
  background: {
    mobile: backgroundMobile
  }
}

export const Main = () => {
  return <BaseMainTemplate data={data} />
}
