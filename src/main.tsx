import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/main.sass"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AboutUs from './routes/AboutUs.tsx'
import AppDesign from './routes/AppDesign';
import Contact from './routes/Contact.tsx'
import Locations from './routes/Locations.tsx'
import WebDesign from './routes/WebDesign.tsx'
import Home from './routes/Home.tsx'
import GraphicDesign from './routes/GraphicDesign.tsx'
import ErrorPage from './routes/ErrorPage.tsx'

const router = createBrowserRouter([
  {
  path:"/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children:[
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"about",
    element: <AboutUs/>
  },
  {
    path:"appdesign",
    element: <AppDesign/>
  },
  {
    path:"contact",
    element: <Contact/>
  },
  {
    path:"graphic",
    element: <GraphicDesign/>
  },
  {
    path:"locations",
    element: <Locations/>
  },
  {
    path:"webdesign",
    element: <WebDesign/>
  }]
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
