import React from 'react'
import "./Card.css"

const Card = ({key,img, description,links, switcher}) => {
  return (
    <>
   <article id={key} className="card">
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