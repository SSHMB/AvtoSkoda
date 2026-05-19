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
import Error404 from './error404.jsx'
import BrandDetail from './Components/BrandDetail.jsx'
import CollectionDetail from './Components/CollectionDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'credit',
        element: <CreditFinancePage />,
      },
      {
        path: 'brand/:brandName',
        element: <BrandDetail />,
      },
      {
        path: 'collections/:collectionId',
        element: <CollectionDetail />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)