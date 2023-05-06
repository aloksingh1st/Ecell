import React from "react";
import "./ApplyPage.css"

const ApplyPage = () => {
  return (
    <>
    <h1 className="applyHeading">Be A Part Of Change</h1>
    <h4 className="applyChotaHeading">Join E-cell</h4>
      <form action="#" className="applyForm">
        <input type="text" placeholder="Enter Your Name" />
        <input type="email" placeholder="Enter Your Email" />
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Enter Mobile Number"
        />

<select name="cars" id="cars">
  <option value="volvo">Choose a field</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

<input type="submit" value="Submit" />
<input type="reset" value="Reset"/>
      </form>
    </>
  );
};

export default ApplyPage;
