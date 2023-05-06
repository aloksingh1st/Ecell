import React from 'react'

const Students = () => {
  return (
    <>
         <div className="left-right-container">
    <div className="left switch-left">
      <h1>Students</h1>
      <p>It is always a good idea to know what your fellow freinds are upto, isn't it ?
      </p>
      <a href="/connectForm">Connect</a>
    </div>

  
    <div className="right">
      <img src="./images/Students.gif" alt=""/>
    </div>

    </div>

    <div className="left-right-container">
    <div className="left">
      <h1>Alumni</h1>
      <p>
        We give you a chance to stay in contact and learn from each other after you've left the institute.
      </p>
      <a href="/connectForm">Connect</a>
    </div>

    <div className="right">
      <img src="./images/Graduation.gif" alt=""/>
    </div>

    </div>

    <div className="left-right-container">
    <div className="left switch-left">
      <h1>Startups</h1>
      <p>
        Helps you to refine your ideas and connect you to relevant mentors. E-Drishti is committed to ease your journey to success.
      </p>
      <a href="/connectForm">Connect</a>
    </div>

    <div className="right">
      <img src="./images/Market launch.gif" alt=""/>
    </div>

    </div>

    <div className="left-right-container">
    <div className="left">
      <h1>Investors</h1>
      <p>
        "Make My Money Make Me Money" . We're here to help you to find right people with the right stakeholders and right deals for everyone
      </p>
      <a href="/connectForm">Connect</a>
    </div>

    <div className="right">
      <img src="./images/Crypto portfolio.gif" alt=""/>
    </div>
    </div>
    </>
  )
}

export default Students