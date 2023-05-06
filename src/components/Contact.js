import React from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { SiWebmoney } from "react-icons/si";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="blogCard card contact-card">
        <h1>Contact Us</h1>

        <div className="cont">
          <div className="cont-cont">
            <span>
              <AiFillPhone />
              Phone
            </span>
            <a href="tel:8004653325">8004653325</a>
          </div>

          <div className="cont-cont">
            <span>
              <AiTwotoneMail />
              Email
            </span>
            <a href="mailto:ecell@kit.ac.in">ecell@kit.ac.in</a>
          </div>

          <div className="cont-cont">
            <span>
              <SiWebmoney />
              Website
            </span>
            <a href="https://www.kit.ac.in/" target="_blank">KIT Kanpur</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
