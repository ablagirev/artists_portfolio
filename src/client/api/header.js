import axios from 'axios'

import logo from 'assets/logo/logo.png'

const getHeader = () => {
  // return axios.get('/api/artists/')

  return Promise.resolve({
    data: {
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
  })
}

export const headerApi = { getHeader }
