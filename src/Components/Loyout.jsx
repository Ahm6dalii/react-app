import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/navbar'
import '../index.css'

import { Outlet } from 'react-router-dom'

export default function Loyout() {
  return (
    <>
     <Navbar/>
      <Outlet/>
    <Footer/>
   </>
  )
}
