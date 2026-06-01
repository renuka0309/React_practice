import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Header, Footer } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
)
