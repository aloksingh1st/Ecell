import React from 'react'
import "./Create.css"

const Create = () => {
  return (
    <>
    <div className="create-container">

        <h1>Create</h1>
        
    <input type="text" name="heading" id="heading" placeholder='heading'/>
    <input type="text" name="imageLink" id="image-link" placeholder='Image Link ...'/>
    <textarea id="new" name='new' rows={"14"} cols="130" placeholder='Continer' >
        
    </textarea>

    <input type="submit" value="Add" />
    </div>
    </>
  )
}

export default Create