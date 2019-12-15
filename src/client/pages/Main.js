import React from 'react'

import { BaseMainTemplate } from 'client/templates'
import logo from 'assets/logo/logo.png'

const header = {
  logo: {
    id: '000',
    value: 'logo',
    img: logo,
    link: '#'
  },
  menu: [
    { id: '001', value: 'Актеры', link: '#' },
    { id: '002', value: 'Актрисы', link: '#' },
    { id: '003', value: 'О Нас', link: '#' }
  ],
  contacts: [
    { id: '004', type: 'cell', link: '#' },
    { id: '005', type: 'watsapp', link: '#' },
    { id: '006', type: 'number', link: '+7 903 729 66 17' },
    { id: '007', type: 'post', link: '#' },
    { id: '008', type: 'facebook', link: '#' },
    { id: '009', type: 'instagram', link: '#' }
  ]
}

export const Main = () => {
  const data = 'Добро пожаловать в Шато Хуито'
  return <BaseMainTemplate data={data} header={header} />
}
