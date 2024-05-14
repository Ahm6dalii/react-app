import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="contact  py-5" id="contact">
      <div className="container d-flex flex-column justify-content-center align-items-center ">
        <h2 className="title mb-3 fw-bolder fs-1 text-blue">
          CONATCT SECTION
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line  me-3 bg-blue"></div>
          <i className="fa-solid fa-star text-blue"></i>
          <div className="line ms-3 bg-blue "></div>
        </div>
        <div className="form  w-50 ">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="User name"
            />
            <label htmlFor="floatingInput">User Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="User Age"
            />
            <label htmlFor="floatingInput">User Age</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="User Email"
            />
            <label htmlFor="floatingInput">User Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="userPassword"
            />
            <label htmlFor="floatingPassword">userPassword</label>
          </div>
          <button className="btn btn-primary mt-3">Send Message</button>
        </div>
      </div>
    </div>
  </>
  )
}
