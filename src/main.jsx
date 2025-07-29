import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FavouritesProvider } from './Components/FavouritesContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FavouritesProvider>
       <App />
    </FavouritesProvider>
  </BrowserRouter>,
)
