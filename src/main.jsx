import { StrictMode } from 'react'

import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 
 <StoreContextProvider>
 <App />

 </StoreContextProvider>
 
 
 </BrowserRouter>
   
  

)
