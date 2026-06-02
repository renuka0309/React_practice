import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/React-facts/Header.jsx'
import Footer from './components/React-facts/Footer.jsx'
import Content from'./components/React-facts/Content.jsx'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
    <Footer />
  </StrictMode>
)
