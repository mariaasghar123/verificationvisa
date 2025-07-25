import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css' // 👈 Bootstrap CSS import
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // 👈 Bootstrap JS (for modal, dropdown etc.)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
