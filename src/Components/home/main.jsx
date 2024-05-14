import React from 'react'
import logo from "../../assets/avataaars.svg";

export default function main() {
  return (
    <>
        <div className=" main d-flex flex-column justify-content-center align-items-center bg-main vh-100" id="port">
          <img src={logo} alt="" className="mb-3 avatar" />
          <h2 className="main-title text-white">START FRAMEWORK</h2>
          <div  className="d-flex align-items-center justify-content-center mb-3">
            <div  className="line  me-3  bg-white" ></div>
            <i  className="fa-solid fa-star text-white"></i>
            <div  className="line ms-3 bg-white"></div>
          </div>
          <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </>
  )
}



