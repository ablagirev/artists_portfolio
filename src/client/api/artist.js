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

const getArtistList = type => {
  // return axios.get('/api/artists/')
  const artists = data[type] ? data[type] : null

  return artists
    ? Promise.resolve({ data: { rows: artists, total: artists.length } })
    : Promise.reject({ statusCode: 404, message: 'Страница не найдена' })
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
