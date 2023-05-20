import React from 'react'
import "./Card.css"

function Card({id , img, description, switcher}) {
  return (
    <>
    <article title='bledi' key={id} class="card">
     <img className={`card-image ${switcher?'image-grayscale': ''}`} src={img} alt="Background Image"/>
      <figcaption className={'card-overlay'}>
         {description}
     </figcaption>
    </article>
    </>
  )
}

export default Card