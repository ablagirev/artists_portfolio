import axios from 'axios'

import img1 from 'client/assets/img/1.png'
export const getArtistList = () => {
  // return axios.get('/api/artists/')
  // console.log(222, img1)
  // return axios.get('api/artists')
  return Promise.resolve({
    data: {
      rows: [
        {
          firstName: 'Анастасия',
          lastName: 'Егорова',
          age: 33,
          // eslint-disable-next-line import/no-unresolved
          img: img1//import('src/client/assets/img/1.png')
        },
        {
          firstName: 'Ульяна',
          lastName: 'Лисицина',
          age: 25,
          img: img1//import('src/client/assets/img/2.png')
        },
        {
          firstName: 'Александра',
          lastName: 'Кузенкина',
          age: 29,
          img: img1//import('src/client/assets/img/3.png')
        },
        {
          firstName: 'Мария',
          lastName: 'Волкова',
          age: 34,
          img: img1//import('src/client/assets/img/4.png')
        },
        {
          firstName: 'Евгения',
          lastName: 'Гирзекорн',
          age: 33,
          img: img1//import('src/client/assets/img/5.png')
        },
        {
          firstName: 'Анастасия',
          lastName: 'Егорова',
          age: 33,
          img: img1//import('src/client/assets/img/6.png')
        },
        {
          firstName: 'Нелли',
          lastName: 'Селезнева',
          age: 55,
          img: img1//import('src/client/assets/img/7.png')
        },
        {
          firstName: 'Елена',
          lastName: 'Козина',
          age: 32,
          img: img1//import('src/client/assets/img/8.png')
        }
      ],
      total: 9
    }
  })
}

export const artistApi = { getArtistList }
