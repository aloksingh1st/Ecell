import React from 'react'
import "./card.css"
import {AiOutlineMail, AiOutlineLinkedin} from "react-icons/ai"
const card = (props) => {
  return (
    <>
    <div className="card-container" id='card'>
            <div className="minCard minCardo card">
              <img src={props.image} alt="Photo is not availaible" id="profile"/>
             

              <span> 
                <a href={props.mail}>

                 <AiOutlineMail></AiOutlineMail>
                
                </a>
                <a href={props.linkedin}>

                <AiOutlineLinkedin/>
                </a>
                </span>
            </div>
            <h1>{props.name}</h1>
            <h5>{props.role}</h5>
            </div>
    </>
  )
}

export default card