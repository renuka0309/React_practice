import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/chefClaude/index.css'
//import App from './components/chefClaude/App'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
