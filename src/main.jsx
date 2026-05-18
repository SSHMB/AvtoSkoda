import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Katalokavto from './Pages/Katalokavto.jsx'
import dbData from "./db.json";

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
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/credit',
        element: <Home />,
      },
      {
        path: "/katalog",
        element: <Katalokavto cars={dbData.cars} />,
      },

    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
