import React from 'react'
import "./Card.css"

const Card = ({id , img, description, switcher}) => {
  return (
    <>
    <article key={id} class="card">
     <img className={`card-image ${switcher?'image-grayscale': ''}`} src={img} alt="Background Image"/>
      <figcaption class="card-overlay">
         {description}
     </figcaption>
    </article>
    </>
  )
}

export default Card