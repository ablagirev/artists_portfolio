import axios from 'axios'

import img1 from 'assets/img/1.png'
import img2 from 'assets/img/2.png'
import img3 from 'assets/img/3.png'
import img4 from 'assets/img/4.png'
import img5 from 'assets/img/5.png'
import img6 from 'assets/img/6.png'
import img7 from 'assets/img/7.png'
import img8 from 'assets/img/8.png'
export const getArtistList = () => {
  // return axios.get('/api/artists/')

  return Promise.resolve({
    data: {
      rows: [
        {
          firstName: 'Анастасия',
          lastName: 'Егорова',
          age: 33,
          img: img1
        },
        {
          firstName: 'Ульяна',
          lastName: 'Лисицина',
          age: 25,
          img: img2
        },
        {
          firstName: 'Александра',
          lastName: 'Кузенкина',
          age: 29,
          img: img3
        },
        {
          firstName: 'Мария',
          lastName: 'Волкова',
          age: 34,
          img: img4
        },
        {
          firstName: 'Евгения',
          lastName: 'Гирзекорн',
          age: 33,
          img: img5
        },
        {
          firstName: 'Анастасия',
          lastName: 'Егорова',
          age: 33,
          img: img6
        },
        {
          firstName: 'Нелли',
          lastName: 'Селезнева',
          age: 55,
          img: img7
        },
        {
          firstName: 'Елена',
          lastName: 'Козина',
          age: 32,
          img: img8
        }
      ],
      total: 9
    }
  })
}

export const artistApi = { getArtistList }
