import axios from 'axios'

import logoDesktop from 'assets/logo/logoDesktop.png'
import logoMobile from 'assets/logo/logoMobile.png'

const getHeader = () => {
  // return axios.get('/api/artists/')

  return Promise.resolve({
    data: {
      logo: {
        id: '000',
        value: 'logo',
        img: { desktop: logoDesktop, mobile: logoMobile },
        link: '/'
      },
      menu: [
        { id: '0asd01', value: 'Актеры', link: '/actors' },
        { id: '0asdasd02', value: 'Актрисы', link: '/actresses' },
        { id: '0asdasd03', value: 'О Нас', link: '/about' }
      ],
      contacts: [
        [{ id: '0gfhfgfgh06', type: 'cell', link: '+7 903 729 66 17' }],
        [
          { id: '0fghfgh07', type: 'post', link: '7296617@mail.ru' },
          { id: '00ertert8', type: 'facebook', link: '#' },
          { id: '00cvbc9', type: 'instagram', link: '#' }
        ]
      ]
    }
  })
}

export const headerApi = { getHeader }
