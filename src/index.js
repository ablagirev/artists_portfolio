import React from 'react'
import { render } from 'react-dom'

import { App } from 'client/App'

const APP_ID = process.env.APP_ID

render(<App />, document.getElementById(APP_ID))
