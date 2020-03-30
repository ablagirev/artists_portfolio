import { createLogic } from 'redux-logic'

import { artistApi } from 'api/artist'
import { artistActions } from 'reducer/artistReducer'

const getArtistList = createLogic({
  type: artistActions.getArtistList().type,
  process({ action: { payload } }, dispatch, done) {
    const { type } = payload

    artistApi
      .getArtistList(type)
      .then(({ data }) => {
        dispatch(artistActions.getArtistListSuccess({ data }))
      })
      .catch(error => {
        dispatch(artistActions.getArtistListFail({ error }))
      })
      .then(() => done())
  }
})

const getArtistDetails = createLogic({
  type: artistActions.getArtistDetails().type,
  process({ action: { payload } }, dispatch, done) {
    const { type, artistId } = payload

    artistApi
      .getArtistDetails(type, artistId)
      .then(({ data }) => {
        dispatch(artistActions.getArtistDetailsSuccess({ data }))
      })
      .catch(error => {
        dispatch(artistActions.getArtistDetailsFail({ error }))
      })
      .then(() => done())
  }
})

export const artistLogic = [getArtistList, getArtistDetails]
