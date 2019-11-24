import { paStatusCodes } from 'constants'

import { createLogic } from 'redux-logic'

import { paymentAdapterActions, getStatusInfo } from './reducer'

import { paymentAdapterApi } from 'api/paymentAdapter'
import { STATUS_WAIT } from 'features/paymentAdapter/constants'

const getStatus = createLogic({
  type: paymentAdapterActions.getStatus().type,
  latest: true,
  debounce: 200,
  async process({ action: { payload } }, dispatch, done) {
    const { hash } = payload
    try {
      const { data: response } = await paymentAdapterApi.getStatus({ hash })
      let { code } = response

      const status = getStatusInfo(code)

      dispatch(paymentAdapterActions.getStatusSuccess({ status }))

      if (+code === STATUS_WAIT) {
        dispatch(paymentAdapterActions.subscribeToRefresh({ hash, replace: true }))
      } else {
        dispatch(paymentAdapterActions.unsubscribe())
      }

      done()
    } catch (error) {
      dispatch(paymentAdapterActions.getStatusFail({ error }))
      done()
    }
  }
})

const sign = createLogic({
  type: paymentAdapterActions.signRequest().type,
  latest: true,
  debounce: 200,
  async process({ action: { payload } }, dispatch, done) {
    const { card, code, hash } = payload
    try {
      const { data: response } = await paymentAdapterApi.sign({ card, code, hash })
      const { code } = response
      dispatch(paymentAdapterActions.signSuccess({ code }))
      done()
    } catch (error) {
      dispatch(paymentAdapterActions.signFail({ error }))
      done()
    }
  }
})

const getNewCode = createLogic({
  type: paymentAdapterActions.getNewCode().type,
  latest: true,
  debounce: 200,
  async process({ action: { payload } }, dispatch, done) {
    const { hash } = payload
    try {
      await paymentAdapterApi.getNewCode({ hash })
      dispatch(paymentAdapterActions.getNewCodeSuccess())
      done()
    } catch (error) {
      dispatch(paymentAdapterActions.getNewCodeFail({ error }))
      done()
    }
  }
})

const subscribeRefresh = createLogic({
  type: paymentAdapterActions.subscribeToRefresh().type,
  cancelType: paymentAdapterActions.unsubscribe().type,
  latest: true,
  debounce: 200,
  warnTimeout: 0,
  process({ cancelled$, action: { payload } }, dispatch, done) {
    const { hash } = payload
    const interval = setInterval(() => {
      dispatch(paymentAdapterActions.getStatus({ hash, replace: true }))
    }, 3000)
    cancelled$.subscribe(() => {
      clearInterval(interval)
    })
  }
})

export const paymentAdapterLogic = [getStatus, sign, getNewCode, subscribeRefresh]
