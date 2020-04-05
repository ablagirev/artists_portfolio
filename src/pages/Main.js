import React from 'react'

import { BaseMainTemplate } from 'templates'
import { randomPhoto } from 'sourceData/artistData'
import backgroundMobile from 'assets/img/main/background_main_mob.png'

const getRandom = (min, max) => {
  const minVal = Math.ceil(min)
  const maxVal = Math.floor(max)

  return Math.floor(Math.random() * (maxVal - minVal)) + minVal
}

const woman = randomPhoto.women[getRandom(0, randomPhoto.women.length)].list
const man = randomPhoto.men[getRandom(0, randomPhoto.men.length)].list

const data = {
  women: {
    picture: woman,
    title: 'Актрисы',
    link: '#'
  },
  men: {
    picture: man,
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
