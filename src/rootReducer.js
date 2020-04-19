import { combineReducers } from 'redux'

import { errors } from 'errors/reducer'
import { artistReducer, headerReducer, footerReducer, aboutReducer, mainReducer } from 'reducer'

export const rootReducer = combineReducers({
  errors,
  artist: artistReducer,
  header: headerReducer,
  footer: footerReducer,
  about: aboutReducer,
  main: mainReducer
})
