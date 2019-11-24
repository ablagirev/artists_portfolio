import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { errors } from 'client/errors/reducer'

export const createRootReducer = history =>
  combineReducers({
    errors,
    router: connectRouter(history)
  })
