import React from 'react'
import "./blogCard.css"

const blogCard = () => {
  return (
    <>

    <div className="blogCard card">
        <img src="./images/learning.png" alt="" />

        <div className="text-container">

        <h1>Heading Of The Blog</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error molestias incidunt dignissimos eos ex a quos animi saepe dicta, rerum, consequatur quas nesciunt temporibus expedita corrupti omnis inventore eligendi unde! Qui quasi inventore laboriosam tenetur. Vero doloremque sint aspernatur provident? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat corrupti excepturi id expedita voluptatibus reprehenderit? Aliquid, placeat voluptatem. Recusandae architecto ab provident sequi id pariatur labore quas temporibus assumenda quidem.</p>
        <a href="/">Read More</a>
        </div>
    </div>
    
    </>
  )
}

export default blogCard