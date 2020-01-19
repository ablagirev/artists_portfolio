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
    { id: '0asd01', value: 'Актеры', link: '#' },
    { id: '0asdasd02', value: 'Актрисы', link: '#' },
    { id: '0asdasd03', value: 'О Нас', link: '#' }
  ],
  contacts: [
    [{ id: '0gfhfgfgh06', type: 'cell', link: '+7 903 729 66 17' }],
    [
      { id: '0fghfgh07', type: 'post', link: '#' },
      { id: '00ertert8', type: 'facebook', link: '#' },
      { id: '00cvbc9', type: 'instagram', link: '#' }
    ]
  ]
}

const footer = {
  social: [
    { id: '007', type: 'post', link: '#' },
    { id: '008', type: 'facebook', link: '#' },
    { id: '009', type: 'instagram', link: '#' }
  ],
  contacts: [
    { id: '010', type: 'phone', value: '+7 903 729 66 17' },
    { id: '011', type: 'post', value: '7296617@mail.ru' }
  ],
  attachment: { id: '012', link: '#', value: 'Скачать шахматку' },
  additional: [
    { id: '013', text: 'Фото/визитки: Kinoface Production', phone: '+7 916 437 7222' },
    { id: '014', text: 'Творческие визитки : Худяков Андрей', phone: '+7 985 277 44 99' }
  ],
  designer: {
    id: '015',
    value: '© KoalaKate Designs',
    link: '#'
  }
}

export const Main = () => {
  const data = 'Добро пожаловать в Шато Хуито'
  return <BaseMainTemplate data={data} header={header} footer={footer} />
}
