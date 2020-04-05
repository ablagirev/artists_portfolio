import { schema, normalize } from 'normalizr'
import { data } from 'sourceData/artistData'

const getArtistList = type => {
  const artists = data[type] ? data[type] : null
  console.log(type);
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
