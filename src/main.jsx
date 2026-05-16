import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import CreditFinancePage from './Pages/CreditFinancePage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Erorr from './Pages/Erorr.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erorr />,
    children: [
<<<<<<< HEAD
  {
  index: true,
  element: <CreditFinancePage />,
},
{
  path: '/credit',
  element: <CreditFinancePage />,
},
=======
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/credit',
        element: <Home />,  
      },
>>>>>>> 0e71c585b9d900ce93014e8c21080ef909324fb7

    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
