import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { errors } from 'client/errors/reducer'
import { artistReducer } from 'client/reducer'

export const createRootReducer = history =>
  combineReducers({
    errors,
    artist: artistReducer,
    router: connectRouter(history)
  })
