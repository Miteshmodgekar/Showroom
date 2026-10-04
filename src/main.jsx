import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Clear any stale cached numbers from previous visits
try {
  ['cozycorner_business_v3', 'cozycorner_business'].forEach(k => {
    const val = localStorage.getItem(k);
    if (val && (val.includes('7090334427') || val.includes('74111') || !val.includes('8951207571'))) {
      localStorage.removeItem(k);
    }
  });
} catch (e) {}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
