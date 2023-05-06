import React from 'react'
import "./initiative.css"

const Initiative = () => {
  return (
    <>

    <div className="container-initiative">


    <div className="left-right-container">
    <div className="left switch-left">
      <h1>Our Vision</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus repellat cum eaque?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas qui veniam officia atque adipisci, rerum fuga accusamus voluptas iure quod culpa excepturi magnam. Accusamus.
      </p>
      {/* <a href="/initiatives">Connect</a> */}
    </div>

  
    <div className="right">
      <img src="./images/vission.gif" alt=""/>
    </div>

    </div>

    <div className="left-right-container">
    <div className="left">
      <h1>Our Mission</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus repellat cum eaque?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas qui veniam officia atque adipisci, rerum fuga accusamus voluptas iure quod culpa excepturi magnam. Accusamus.
      </p>
      {/* <a href="/initiatives">Connect</a> */}
    </div>

  
    <div className="right">
      <img src="./images/misson.gif" alt=""/>
    </div>

    </div>    

    <h1 className='mh1'>Our Initiatives</h1>

    <div className="initiaves">




    <div className="card-container">
            <div className="minCardo card">
              <img src="./images/ideabox.png" alt="" />
              <h2>Idea Box</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum, deserunt sapiente facere animi distinctio nesciunt
                architecto. Animi id accusantium reiciendis, perferendis cum
                voluptates quis praesentium reprehenderit quisquam fuga
                accusamus tempore debitis beatae quam minima facilis repellat
                esse corrupti! A.
              </p>
            </div>



            <div className="minCardo card">
              <img src="./images/momentum.png" alt="" />
              <h2>The Momentum</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum, deserunt sapiente facere animi distinctio nesciunt
                architecto. Animi id accusantium reiciendis, perferendis cum
                voluptates quis praesentium reprehenderit quisquam fuga
                accusamus tempore debitis beatae quam minima facilis repellat
                esse corrupti! A.
              </p>
            </div>


            <div className="minCardo card">
              <img src="./images/summit.png" alt="" />
              <h2>E-Summit</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum, deserunt sapiente facere animi distinctio nesciunt
                architecto. Animi id accusantium reiciendis, perferendis cum
                voluptates quis praesentium reprehenderit quisquam fuga
                accusamus tempore debitis beatae quam minima facilis repellat
                esse corrupti! A.
              </p>
            </div>

            <div className="minCardo card">
              <img src="./images/pankh.png" max-width="10rem" alt="" />
              <h2>Pankh</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum, deserunt sapiente facere animi distinctio nesciunt
                architecto. Animi id accusantium reiciendis, perferendis cum
                voluptates quis praesentium reprehenderit quisquam fuga
                accusamus.
              </p>
            </div>
      </div>
    </div>

    </div>

    </>
  )
}

export default Initiative