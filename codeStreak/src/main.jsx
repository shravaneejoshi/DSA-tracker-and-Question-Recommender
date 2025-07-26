import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CustomSheet from './pages/CustomSheet.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   {/* <CustomSheet/> */} 
  
  </StrictMode>,
)
