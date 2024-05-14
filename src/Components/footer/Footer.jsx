import React from 'react'

export default function 
() {
  return (
    <>
    <div className="about bg-blue py-5 text-white text-center">
    <div className="container">
<div className="row gy-5 gy-md-0">
    <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
     <h3>LOCATION</h3>
     <p className="word-sp-min">2215 John Daniel Drive
Clark, MO 65243</p>
    </div>
    <div className="col-md-4 ">
        <h3 >AROUND THE WEB</h3>
        <div className="social d-flex justify-content-center gap-1">
            <span className="icon">
                <i className="fa-brands fa-facebook text-white"></i>
            </span>
            <span className="icon">
                <i className="fa-brands fa-twitter text-white"></i>
            </span>
            <span className="icon">
                <i className="fa-brands fa-linkedin text-white"></i>
            </span>
            <span className="icon">
                <i className="fa-solid fa-globe text-white"></i>
            </span>
        </div>
    </div>
    <div className="col-md-4">
    <h3 >ABOUT FREELANCER</h3>
    <p className="fs-sm">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
</div>
    </div>
</div>
 <div className="footer text-center py-3 text-white">
 <p className="m-0">Copyright &copy; Your Website 2021</p>
</div>
</>

  )
}
