import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/contact/index.css'
import App from './components/jokes/App'
//import Jokes from './components/jokes/funPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
  </StrictMode>
)
