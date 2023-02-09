import * as React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app-root')
if(container) {
  const root = createRoot(container)
  root.render(<h1>Hello World!</h1>)
}
