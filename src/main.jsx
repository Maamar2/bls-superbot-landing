import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'
import App from './App.jsx'
import Pricing from './pages/Pricing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
