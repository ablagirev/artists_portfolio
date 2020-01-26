import { createLogic } from 'redux-logic'

import { artistApi } from 'client/api/artist'
import { artistActions } from 'client/reducer/artistReducer'

const getArtistList = createLogic({
  type: artistActions.getArtistList().type,
  process({ action: { payload } }, dispatch, done) {
    // const { data } = payload || {}
    artistApi
      .getArtistList()
      .then(({ data }) => {
        dispatch(artistActions.getArtistListSuccess({ data }))
      })
      .catch(error => dispatch(artistActions.getArtistListFail(error)))
  }
})

const getArtistDetails = createLogic({
  type: artistActions.getArtistDetails().type,
  process({ action: { payload: artistId } }, dispatch, done) {
    artistApi
      .getArtistDetails(artistId)
      .then(({ data }) => {
        dispatch(artistActions.getArtistDetailsSuccess({ data }))
      })
      .catch(error => {
        dispatch(artistActions.getArtistDetailsFail({ error }))
      })
  }
})

export const artistLogic = [getArtistList, getArtistDetails]
