import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { errors } from 'client/errors/reducer'
import { artistReducer, headerReducer, footerReducer } from 'client/reducer'

export const createRootReducer = history =>
  combineReducers({
    errors,
    artist: artistReducer,
    header: headerReducer,
    footer: footerReducer,
    router: connectRouter(history)
  })
