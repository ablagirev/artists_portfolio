import { createLogic } from 'redux-logic'

import { footerApi } from 'client/api/footer'
import { footerActions } from 'client/reducer/footerReducer'

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
  }
})

export const footerLogic = [getFooter]
