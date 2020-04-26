import { applyMiddleware, compose, createStore } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './rootReducer'
import { rootLogic } from './rootLogic'

export const configureStore = preloadedState => {
  const logicMiddleware = createLogicMiddleware(rootLogic)
  const middlewareEnhancer = applyMiddleware(logicMiddleware)

  const composeWithMode = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools
  const composedEnhancers = composeWithMode(middlewareEnhancer)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store
}
