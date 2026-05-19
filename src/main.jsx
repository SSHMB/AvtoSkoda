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
import Katalokavto from './Pages/Katalokavto.jsx'
import Izbrannoe from './Pages/Izbrannoe.jsx'
import ProbegPage from './Pages/ProbegPage.jsx'
import SpetsPage from './Pages/SpetsPage.jsx'
import TaksiPage from './Pages/TaksiPage.jsx'
import dbData from "./db.json"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { index: true, element: <Home /> },
      { path: 'katalog', element: <Katalokavto cars={dbData.cars} /> },
      { path: 'credit', element: <CreditFinancePage /> },
      { path: 'probeg', element: <ProbegPage /> },
      { path: 'spets', element: <SpetsPage /> },
      { path: 'taksi', element: <TaksiPage /> },
      { path: 'izbrannoe', element: <Izbrannoe /> },
      { path: 'brand/:brandName', element: <BrandDetail /> },
      { path: 'collections/:collectionId', element: <CollectionDetail /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
