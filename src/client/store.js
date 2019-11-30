import { applyMiddleware, compose, createStore, Store } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import 'isomorphic-fetch'
import root from 'window-or-global'

import { createRootReducer } from './rootReducer'
import { rootLogic } from './rootLogic'

const deps = {}

export const history = createBrowserHistory()

export const configureStore = () => {
  const logicMiddleware = createLogicMiddleware(rootLogic, deps)
  const createEnhancer = () => {
    const composeEnhancers = root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return composeEnhancers(applyMiddleware(logicMiddleware, routerMiddleware(history)))
  }

  const enhancer = createEnhancer()
  const store = createStore(createRootReducer(history), enhancer)
  store.logicMiddleware = logicMiddleware

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }
  // check store
  root.store = store

  return store
}
