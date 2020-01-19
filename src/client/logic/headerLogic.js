import { createLogic } from 'redux-logic'

import { headerApi } from 'client/api/header'
import { headerActions } from 'client/reducer/headerReducer'

const getHeader = createLogic({
  type: headerActions.getHeader().type,
  process({ action: { payload } }, dispatch, done) {
    // const { data } = payload || {}
    headerApi
      .getHeader()
      .then(({ data }) => {
        dispatch(headerActions.getHeaderSuccess({ data }))
      })
      .catch(error => dispatch(headerActions.getHeaderFail(error)))
  }
})

export const headerLogic = [getHeader]
