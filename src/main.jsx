import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/contact/index.css'
import ContactLog from './components/contact/contactLog.jsx'
import App from './components/contact/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactLog />
    <App />
  </StrictMode>
)
