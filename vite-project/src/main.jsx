import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Application entry point - Renders the React app into the DOM
createRoot(document.getElementById('root')).render(
  // StrictMode enables additional development checks and warnings
  <StrictMode>
    <App />
  </StrictMode>,
)
