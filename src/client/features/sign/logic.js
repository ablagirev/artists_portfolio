import { createLogic } from 'redux-logic'

import { signActions } from './reducer'

import { signApi } from 'client/api/sign'

const sign = createLogic({
  type: signActions.signRequest().type,
  latest: true,
  debounce: 200,
  async process({ action: { payload } }, dispatch, done) {
    try {
      await signApi.sign(payload)
      dispatch(signActions.signSuccess())
    } catch (err) {
      dispatch(signActions.signFail())
    }
    done()
  }
})
const getNewCode = createLogic({
  type: signActions.getNewCode().type,
  latest: true,
  debounce: 200,
  async process({ action: { payload } }, dispatch, done) {
    try {
      await signApi.getNewCode(payload)
      dispatch(signActions.getNewCodeSuccess())
    } catch (err) {
      dispatch(signActions.getNewCodeFail())
    }
    done()
  }
})

export const signLogic = [sign, getNewCode]
