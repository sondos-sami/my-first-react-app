import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
 
import App from './App.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
import NotFound from './NotFound/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { HelmetProvider } from 'react-helmet-async';
const router=createBrowserRouter([
  {path:"/",element:<Layout/> ,children:[
    {index:true,element:<Home/> },
  {path:"about",element:<About/>},
  {path:"contact",element:<Contact/>},
  {path:"portfolio",element:<Portfolio/>},
  {path:"*",element:<NotFound/>}
  ]}
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
<RouterProvider router={router}></RouterProvider> 
    </HelmetProvider>
     
  </StrictMode>,
)
