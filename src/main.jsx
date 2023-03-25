import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* REACT ROUTER */
import { RouterProvider } from "react-router-dom";
  // Cascada de rutas:
  import {router} from './router/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
