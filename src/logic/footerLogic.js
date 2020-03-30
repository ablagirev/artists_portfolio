import { createLogic } from 'redux-logic'

import { footerApi } from 'api/footer'
import { footerActions } from 'reducer/footerReducer'

const getFooter = createLogic({
  type: footerActions.getFooter().type,
  process({ action: { payload } }, dispatch, done) {
    // const { data } = payload || {}
    footerApi
      .getFooter()
      .then(({ data }) => {
        dispatch(footerActions.getFooterSuccess({ data }))
      })
      .catch(error => dispatch(footerActions.getFooterFail(error)))
      .then(() => done())
  }
})

export const footerLogic = [getFooter]
