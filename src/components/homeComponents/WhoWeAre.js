import React from 'react'
import "./WhoWeAre.css"
import { NavLink } from 'react-router-dom'

const WhoWeAre = () => {
  return (
    <>
    {/* <div className="container-joinus"> */}
    <div className="left-right-container">
    <div className="left switch-left">
      <h1>Who We Are ?</h1>
      <p>E-Drishti is a Enterpreneurship that keeps culture and creativity at the Heart of everything we do. Our mission is to help students unlock their creativity, Innovative ideas and build exceptional content using our E-Drishti platform.</p>
      <a href="/about">Know More</a>
      {/* <NavLink to={"about"}>Know More</NavLink> */}
    </div>

    <div className="right">
      <img src="./images/question.png" alt=""/>
    </div>

    </div>
    {/* </div> */}
    </>
  )
}

export default WhoWeAre