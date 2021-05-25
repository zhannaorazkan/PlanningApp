import React from 'react'
import image from './tropical-green-leaves-background.jpg'
import './Image.css'

function Image(){
    console.log(image)
    return(
        <div className="Image">
            <img src={image}/>
        </div>
    )
}

export default Image