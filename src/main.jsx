import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import CreditFinancePage from './Pages/CreditFinancePage.jsx'
import Erorr from './Pages/Erorr.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erorr />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'credit',
        element: <CreditFinancePage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)