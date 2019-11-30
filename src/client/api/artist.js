import axios from 'axios'

export const getArtistList = () => {
  // return axios.get('/api/artists/')

  // return axios.get('api/artists')
  return Promise.resolve({
    data: {
      data: [
        {
          firstName: 'Анастасия',
          lastName: 'Егорова',
          age: 33
        },
        {
          firstName: 'Ульяна',
          lastName: 'Лисицина',
          age: 25
        },
        {
          firstName: 'Александра',
          lastName: 'Кузенкина',
          age: 29
        },
        {
          firstName: 'Мария',
          lastName: 'Волкова',
          age: 34
        },
        {
          firstName: 'Евгения',
          lastName: 'Гирзекорн',
          age: 33
        },
        {
          firstName: 'Анастасия',
          lastName: 'Егорова',
          age: 33
        },
        {
          firstName: 'Нелли',
          lastName: 'Селезнева',
          age: 55
        },
        {
          firstName: 'Елена',
          lastName: 'Козина',
          age: 32
        }
      ],
      total: 9
    }
  })
}

export const artistApi = { getArtistList }
