import { createLogic } from 'redux-logic'

import { mainApi } from 'api/main'
import { mainActions } from 'reducer/mainReducer'

const getMain = createLogic({
  type: mainActions.getMain().type,
  process(_, dispatch, done) {
    mainApi
      .getMain()
      .then(({ data }) => {
        dispatch(mainActions.getMainSuccess({ data }))
      })
      .catch(error => dispatch(mainActions.getMainFail(error)))
      .then(() => done())
  }
})

export const mainLogic = [getMain]
