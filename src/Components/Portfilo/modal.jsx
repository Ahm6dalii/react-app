import React from 'react'
import style from './style.module.css'
export default function Modal({imgSrc,func,modID}) {
    // console.log(imgSrc,func)
  return (
    <div onClick={()=>{
        func(modID)
    }} className='ove bg-black bg-opacity-25 h-100 d-none justify-content-center align-items-center position-fixed top-0 start-0 end-0 z-3' id={modID}> 
    <img src={imgSrc} className={style.imgWidth} alt="" />
    </div>
  )
}
