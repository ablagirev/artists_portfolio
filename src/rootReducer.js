import { combineReducers } from 'redux'

import { errors } from 'errors/reducer'
import { artistReducer, headerReducer, footerReducer } from 'reducer'

export const rootReducer = combineReducers({
  errors,
  artist: artistReducer,
  header: headerReducer,
  footer: footerReducer
})
