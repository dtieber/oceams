import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './app'
import { store } from './app/store'

const container = document.getElementById('app-root')
if(container) {
  const root = createRoot(container)
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
  )
}
