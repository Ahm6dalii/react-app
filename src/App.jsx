
import About from './Components/About/About'
import Portfilo from './Components/Portfilo/Portfilo'
import Contact from './Components/contact/Contact'
import Main from './Components/home/main'
import Layout from './Components/Loyout'

import {RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom'
import './App.css'


function App() {
  
 let router=createHashRouter([
  {path:'',element:<Layout/>, children:[
    {path:'',element:<Main />},
    {path:'about',element:<About />},
    {path:'port',element:<Portfilo />},
    {path:'cont',element:<Contact />}
  ] }
 
])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
