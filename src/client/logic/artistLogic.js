import { createLogic } from 'redux-logic'

import { artistApi, getArtistList } from 'client/api/artist'
import { artistActions } from 'client/reducer/artistReducer'

const getArtist = createLogic({
  type: artistActions.sendPhotos().type,
  process({ action: { payload } }, dispatch, done) {
    try {
      const { data } = payload || {}

      dispatch(artistActions.getArtistListSuccess({ data }))
    } catch (error) {
      dispatch(getArtistList.get())
    }
    done()
  }
})

export const artistLogic = [getArtist]
