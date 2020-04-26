import 'firebase/analytics'
import firebase from 'firebase/app'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { configureStore } from './configureStore'
import { firebaseConfig } from './firebaseConfig'

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const store = configureStore()

const appId = process.env.APP_ID || 'root'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(appId)
)
