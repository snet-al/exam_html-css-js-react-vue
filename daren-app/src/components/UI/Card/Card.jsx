import React from 'react'
import "./Card.css"

const Card = ({id , img, description,links, switcher}) => {
  return (
    <>
    <article id={id} className="card">
     <img className={`card-image ${switcher?'image-grayscale': ''}`} src={img} alt="Background Image"/>
      <figcaption className="card-overlay">
         {description}
         <a href={links}>{links}</a>
     </figcaption>
    </article>
    </>
  )
}

export default Card