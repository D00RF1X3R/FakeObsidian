import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'


/**
 * Основной элемент, его не трогаем особо
 * Так как работаем мы вдвоем, комменты будут на русском :)
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
