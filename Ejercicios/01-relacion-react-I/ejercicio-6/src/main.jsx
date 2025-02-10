import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ExampleProvider } from './context/useContextExample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExampleProvider>
      <App />
    </ExampleProvider>
  </StrictMode>,
)
