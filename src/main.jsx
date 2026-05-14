import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Erorr from './Pages/Erorr.jsx'
import CollectionDetail from './Components/CollectionDetail.jsx'
import BrandDetail from './Components/BrandDetail.jsx'
import Antiqa from './Components/Antiqa.jsx'

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
        element: <Home />,
      },
      {
        path: 'collections/:collectionId',
        element: <CollectionDetail />,
      },
      {
        path: 'brand/:brandName',
        element: <BrandDetail />,
      },
      {
        path : "/" ,
        element: < Antiqa />,
      },
      {
        path : "/offer/:id" ,
        element: < Antiqa />,
      }
],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)