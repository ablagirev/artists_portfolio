import { createLogic } from 'redux-logic'

import { artistApi, getArtistList } from 'client/api/artist'
import { artistActions } from 'client/reducer/artistReducer'

const getArtist = createLogic({
  type: artistActions.getArtistList().type,
  process({ action: { payload } }, dispatch, done) {
    try {
      // const { data } = payload || {}
      artistApi
        .getArtistList()
        .then(({ data }) => {
          dispatch(artistActions.getArtistListSuccess({ data }))
        })
        .catch(error => artistActions.getArtistListFail(error))
    } catch (error) {
      dispatch(artistActions.getArtistListFail.get())
    }
  }
})

export const artistLogic = [getArtist]
