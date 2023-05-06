import React, { useState } from 'react'
// import {auth, provider} from "./firebase-config"
// import {signInWithPopup } from "firebase/auth"

const Login = ({setIsAuth}) => {

  const signInGoogle = () =>{

    // signInWithPopup(auth, provider).then((result)=>{
      localStorage.setItem("isAuth", true)
      // setIsAuth(true); 
    // })

  }



  return (
    <>
    <h1 className="applyHeading">Be A Part Of Change</h1>
    <h4 className="applyChotaHeading">Join E-cell</h4>
      <form method='post' className="applyForm" > 
        <input type="text" placeholder="Enter Your User Name" name='userName' />
        <input type="Password" placeholder="Enter Your Password" name='passwordUser' />
      


<input type="button" value="Login" onClick={signInGoogle}/>
{/* <input type="reset" value="Reset"/> */}
      </form>
      </>
  )
}

export default Login