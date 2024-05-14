import React from 'react'

export default function About() {
  return (
    <>
    <div className="about bg-main
     shadow" id="about">
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center ">
        <h2 className="about-title mb-3 text-white">ABOUT COMPONENT</h2>
      <div className="d-flex align-items-center justify-content-center mb-3 ">
        <div className="line  me-3 bg-white "></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="line ms-3 bg-white"></div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="text-white ">
            Freelancer is a free bootstrap theme created by Route. The
            download includes the complete source files including HTML, CSS,
            and JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="col-md-6">
          <p className="text-white ">
            Freelancer is a free bootstrap theme created by Route. The
            download includes the complete source files including HTML, CSS,
            and JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>

        </div>
     
    </div>
  </>
  )
}
