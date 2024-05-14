import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './navbar.module.css'

export default function navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-blue ">
<div className="container">
<Link className="navbar-brand logo" to="">START FRAMEWORK</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
    <li className="nav-item">
      <NavLink className='nav-link-cus' aria-current="page" to="about">About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className='nav-link-cus' to="port">Protofilo</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className='nav-link-cus' to="cont">Contact</NavLink>
    </li>
  </ul>
  
</div>
</div>
</nav>
    </>
  )
}
