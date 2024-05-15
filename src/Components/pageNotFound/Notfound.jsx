import React from 'react'
import { NavLink ,Link} from 'react-router-dom';

export default function Notfound() {
  return (
    <div className='vh-100 bg-danger flex-column gap-2 d-flex align-items-center justify-content-center'>
        <h2 >page not found</h2>
        <Link  to={'/react-app/'}>go home</Link>
        </div>
  )
}
