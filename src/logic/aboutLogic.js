import { createLogic } from 'redux-logic'

import { aboutApi } from 'api/about'
import { aboutActions } from 'reducer/aboutReducer'

const getAbout = createLogic({
  type: aboutActions.getAbout().type,
  process(_, dispatch, done) {
    aboutApi
      .getAbout()
      .then(({ data }) => {
        dispatch(aboutActions.getAboutSuccess({ data }))
      })
      .catch(error => dispatch(aboutActions.getAboutFail(error)))
      .then(() => done())
  }
})

export const aboutLogic = [getAbout]
