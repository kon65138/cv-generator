import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/header.jsx'
import { EditSection } from './components/editSpace.jsx'
import { Preview } from './components/preview.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className="mainContent">
      <EditSection />
      <Preview />
    </div>
  </StrictMode>,
)
