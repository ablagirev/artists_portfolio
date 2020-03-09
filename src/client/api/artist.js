import axios from 'axios'
import { schema, normalize } from 'normalizr'

// import img1 from 'assets/img/buntina/main.png'
// import img2 from 'assets/img/volkova/main.png'
// import img3 from 'assets/img/egorova/1.jpeg'
// import img4 from 'assets/img/kutovaya/main.jpg'
// import img5 from 'assets/img/lisicina/main.jpg'
// import img6 from 'assets/img/kuzenkina/main.jpg'
// import img7 from 'assets/img/malkova/main.jpg'
// import img8 from 'assets/img/kachnova/main.jpg'
import { data } from 'client/sourceData/artistData'

const getArtistList = () => {
  // return axios.get('/api/artists/')

  return Promise.resolve(/*{
    data: {
      rows: [
        {
          firstName: 'Дарья',
          lastName: 'Бунтина',
          age: 28,
          img: img1
        },
        {
          firstName: 'Мария',
          lastName: 'Волкова',
          age: 34,
          img: img2
        },
        {
          firstName: 'Анастасия',
          lastName: 'Егорова',
          age: 33,
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
  }*/)
}

const getArtistDetails = (type, artistId) => {
  const artists = data[type] ? data[type] : []
  const scheme = new schema.Entity('artist')
  const {
    entities: { artist: normalizedData }
  } = normalize(artists, [scheme])

  return normalizedData && normalizedData[artistId]
    ? Promise.resolve({ data: normalizedData[artistId] })
    : Promise.reject({ statusCode: 404, message: 'Страница не найдена' })
}

export const artistApi = { getArtistList, getArtistDetails }
