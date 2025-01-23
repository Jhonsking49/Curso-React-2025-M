import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GestorProvider } from './context/GestorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GestorProvider>
      <App />
    </GestorProvider>
  </StrictMode>,
)
