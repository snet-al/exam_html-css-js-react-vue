import React from 'react'
import "./Card.css"
import Image from "../../assests/images/img.jpg"
const Card = () => {
  const cardData=[
    { id: 1, img: `${Image}`, description: 'Lorem ipsum dolor sit.' },
    { id: 2, img: `${Image}`, description: 'Lorem ipsum dolor sit.' },
    { id: 3, img: `${Image}`, description: 'Lorem ipsum dolor sit.' },
    { id: 4, img: `${Image}`, description: 'Lorem ipsum dolor sit.' },
  ]
  
  const displayImages= cardData.map((card)=>(
     <>
     <article key={card.id} class="card">
      <img class="card-image" src={card.img} alt="Background Image"/>

       <figcaption class="card-overlay">
          {card.description}
      </figcaption>
     </article>
     </>
  ))

  return (
    <>
     {displayImages}
    </>
  )
}

export default Card