import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/header.jsx'
import { MainContent } from './components/mainContent.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainContent />
  </StrictMode>,
)
