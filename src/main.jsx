import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { ContextApi } from './Components/ContextApi/ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
  </React.StrictMode>,
)
