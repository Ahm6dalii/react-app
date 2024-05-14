import React, { useEffect, useState } from 'react'
import port1 from '../../assets/1.png';
import port2 from '../../assets/2.png';
import port3 from '../../assets/3.png';
import Modal from './modal';


export default function Portfilo() {

const[isShow,setIsShow]=useState(false);
console.log(this)
  let showModal=(id)=>{
    const modal=document.getElementById(id);
    console.log(modal)
  if(isShow){
    modal.classList.remove("d-flex")
    modal.classList.add("d-none")
setIsShow(false)
  }else{
    modal.classList.add("d-flex")
    modal.classList.remove("d-none")

    setIsShow(true)
  }
  }

  return (
    <>
        <div className="portfilo  py-5 " id="portfilo" >
        <div className="container d-flex flex-column justify-content-center align-items-center ">
            <h2 className="title mb-1 fw-bolder fs-1 ">PORTFOLIO COMPONENT</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line  me-3 bg-blue "></div>
            <i className="fa-solid fa-star text-blue"></i>
            <div className="line ms-3 bg-blue "></div>
          </div>
          <div className="row  row-gap-3">
            <div className="col-md-4 " onClick={()=>{showModal("port1")}} >
              <div className="inner position-relative shadow rounded">
                <img src={port1}  className="w-100 rounded-3" alt="" />
                <div className="img-icon position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center bg-main ">
                <i className="text-white fa-solid fa-plus fa-6x   "></i>
                </div>
              </div>
              <Modal imgSrc={port1} func={showModal} modID={'port1'}/>
            </div>
            <div className="col-md-4 "  onClick={()=>{showModal("port2")}}>
              <div className="inner position-relative shadow rounded">
                <img src={port2} className="w-100 rounded-3" alt="" />
                <div className="img-icon position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center bg-main ">
                <i className="text-white fa-solid fa-plus fa-6x   "></i>
                </div>
              </div>
              <Modal imgSrc={port2} func={showModal} modID={'port2'}/>

            </div>
            <div className="col-md-4 " onClick={()=>{showModal("port3")}} >
              <div className="inner position-relative shadow rounded">
                <img src={port3} className="w-100 rounded-3" alt="" />
                <div className="img-icon position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center bg-main ">
                <i className="text-white fa-solid fa-plus fa-6x   "></i>
                </div>
              </div>
              <Modal imgSrc={port3} func={showModal} modID={'port3'}/>
            </div>
            <div className="col-md-4 " onClick={()=>{showModal("port1")}} >
              <div className="inner position-relative shadow rounded">
                <img src={port1}  className="w-100 rounded-3" alt="" />
                <div className="img-icon position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center bg-main ">
                <i className="text-white fa-solid fa-plus fa-6x   "></i>
                </div>
              </div>
              <Modal imgSrc={port1} func={showModal} modID={'port1'}/>
            </div>
            <div className="col-md-4 "  onClick={()=>{showModal("port2")}}>
              <div className="inner position-relative shadow rounded">
                <img src={port2} className="w-100 rounded-3" alt="" />
                <div className="img-icon position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center bg-main ">
                <i className="text-white fa-solid fa-plus fa-6x   "></i>
                </div>
              </div>
              <Modal imgSrc={port2} func={showModal} modID={'port2'}/>

            </div>
            <div className="col-md-4 " onClick={()=>{showModal("port3")}} >
              <div className="inner position-relative shadow rounded">
                <img src={port3} className="w-100 rounded-3" alt="" />
                <div className="img-icon position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center bg-main ">
                <i className="text-white fa-solid fa-plus fa-6x   "></i>
                </div>
              </div>
              <Modal imgSrc={port3} func={showModal} modID={'port3'}/>
            </div>  
          </div>
          </div>
        </div>
        </>
  )
}