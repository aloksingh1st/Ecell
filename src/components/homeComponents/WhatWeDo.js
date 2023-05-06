import React from 'react'
import "./WhatWeDo.css"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const WhatWeDo = () => {
  return (
    <>
     <section class="section-third" id="section-third">
      <h2>What We Do ?</h2>
      <p>
        We will help to develop the skills and acumen to take your career in many direction 
        and make a genuine contribution to your business from the state.
      </p>
      <div class="section-third-task">


<AnimationOnScroll animateIn="fade-up-right">
        <div class="task-1">
          {/* <img src="./images/book-glp.gif" width={"10000rem"} alt="icon1" /> */}
          <div className="img1"></div>
          <h3>Learn with us</h3>
          <p>
            It's not just about ideas its about making ideas Happen Do it.
          </p>
        </div>
        </AnimationOnScroll>

        <div class="task-2">
          {/* <img src="images/light.gif" alt="icon1" /> */}
          <div className="img2"></div>
          <h3>Build with us</h3>
          <p>
            We will help you to identify exactly what you are.
          </p>
        </div>

        <div class="task-3">
          {/* <img src="images/rocket.gif" alt="icon1" /> */}
          <div className="image-container imagesss">
              {/* <img src="./images/rocket.gif" alt="" /> */}
          </div>
          <h3>Grow With Us</h3>
          <p>
            Together, we're on a path to sucess.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default WhatWeDo