import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import Experiencia from './pages/Experiencia.jsx'
import ExperienciaDetalhe from './pages/ExperienciaDetalhe.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: '/contato', element: <Contato/>},
      {path: '/experiencia', element: <Experiencia/>},
      {path: '/experiencia/:id', element: <ExperienciaDetalhe/>},
      {path: '*', element: <PageNotFound/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
