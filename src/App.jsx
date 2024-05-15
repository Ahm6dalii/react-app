
import About from './Components/About/About'
import Portfilo from './Components/Portfilo/Portfilo'
import Contact from './Components/contact/Contact'
import Main from './Components/home/main'
import Layout from './Components/Loyout'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'
import Notfound from './Components/pageNotFound/Notfound';


function App() {
  
 let router=createBrowserRouter([
  {path:'/react-app/',element:<Layout/>, children:[
    {path:'/react-app/',element:<Main />},
    {path:'about',element:<About />},
    {path:'port',element:<Portfilo />},
    {path:'cont',element:<Contact />},
    {path:'*',element:<Notfound/>}
  ] }
 
])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
