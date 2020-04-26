import { createLogic } from 'redux-logic'

import { headerApi } from 'api/header'
import { headerActions } from 'reducer/headerReducer'

const getHeader = createLogic({
  type: headerActions.getHeader().type,
  process(payload, dispatch, done) {
    headerApi
      .getHeader()
      .then(({ data }) => {
        dispatch(headerActions.getHeaderSuccess({ data }))
      })
      .catch(error => dispatch(headerActions.getHeaderFail({ error })))
      .then(() => done())
  }
})

export const headerLogic = [getHeader]
