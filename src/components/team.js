import React from "react";
import Card from "./AboutComponent/card";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./team.css";

const team = () => {
  return (
    <>
      <div className="teame">
        <h1 className="h1">The Team</h1>

        <h2>Under The Guidance Of</h2>
        <div class="container-fluid cf" id="teacher">
          <Card
            image=""
            name="Prof Norul Islam"
            role="Faculty Incharge"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image=""
            name="Prof Madhuri"
            role="Faculty Co-ordinator"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image=""
            name="Prof. Gauri Bhaudaria"
            role="Faculty Co-ordinator"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/anand.png"
            name="Prof. Anand Awasthi"
            role="Faculty Co-ordinator"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
        </div>
        <h1 className="mh1">Core Team Members</h1>
        <div class="container-fluid cf president">
          <Card
            image="./images/dolly.png"
            name="Dolly Siddqui"
            role="The President"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/shivansh.png"
            name="Shivansh Kumar"
            role="Vice-President"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
        </div>

        <div class="container-fluid cf">
          <Card
            image="./images/priya.png"
            name="Priya Gupta"
            role="Public Relations Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/harshit.png"
            name="Harshit Chaurasiya"
            role="Public Relations Co-Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/ujjwal.png"
            name="Ujjwal Jain"
            id="ujjwal"
            role="Events Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/saumya.png"
            name="Saumya Singh"
            role="Events Co-Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
        </div>

        <div class="container-fluid cf">
          <Card
            image="./images/ayushi.png"
            name="Ayushi Singh"
            role="Idea and Inovation Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/neelance.png"
            name="Neelansh Dwivedi"
            role="Idea and Inovation Co-Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />

          <Card
            image="./images/piyush.png"
            name="Piyush Singh"
            role="Media and Publicity Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />

          <Card
            image="./images/vijay.png"
            name="Vijay Kumar"
            role="Media and Publicity Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
        </div>
        <div class="container-fluid cf">
          <Card
            image="./images/alok.png"
            name="Alok Singh"
            role="Technical Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          {/* <Card image="./images/saumya.png" name="Saumya Singh" role="Events Co-Head" mail="aloksingh1st@gmail.com" linkedin="linkedin.com/aloksingh1st"/> */}
          <Card
            image="./images/sharansh.png"
            name="Sharansh Gaur"
            role="Technical Co-Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />

          <Card
            image="./images/satyam.png"
            name="Satyam Yadav"
            role="Finance Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/pranjali.png"
            name="Pranjali Mishra"
            role="Finance Co-Head"
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
        </div>

        <h1 className="mh1">Advisory Council</h1>
        <div className="container-fluid cf">
          <Card
            image="./images/naved.png"
            name="Naved Khan"
            role=""
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/elisha.png"
            name="Elisha Singh"
            role=""
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/neha.png"
            name="Neha Sharma"
            role=""
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/farheen.png"
            name="Farheen Fatima Naqvi"
            role=""
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
        </div>

        <div className="container-fluid cf">
          
          <Card
            image="./images/kashish.png"
            name="Kashish Shakeel"
            role=""
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
          <Card
            image="./images/pratiksha.png"
            name="Pratiksha Shukla"
            role=""
            mail="aloksingh1st@gmail.com"
            linkedin="linkedin.com/aloksingh1st"
          />
        </div>
      </div>
    </>
  );
};

export default team;
