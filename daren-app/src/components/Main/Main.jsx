import React from 'react'
import "./Main.css"
import Card from "../UI/Card/Card"
import { useGlobalContext } from '../../context/context'

const Main = () => {
  const {switcher}=useGlobalContext()
  const cardData=[
    { id: 1,src:'https://images.pexels.com/photos/2690807/pexels-photo-2690807.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-2690807.jpg&fm=jpg' , description: 'Lorem ipsum dolor sit.', links:'https://picsum.photos/' },
    { id: 2,src:'https://images.pexels.com/photos/2690807/pexels-photo-2690807.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-2690807.jpg&fm=jpg' , description: 'Lorem ipsum dolor sit.', links:'https://picsum.photos/' },
    { id: 3,src:'https://images.pexels.com/photos/2690807/pexels-photo-2690807.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-2690807.jpg&fm=jpg' , description: 'Lorem ipsum dolor sit.', links:'https://picsum.photos/' },
    { id: 4,src:'https://images.pexels.com/photos/2690807/pexels-photo-2690807.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-2690807.jpg&fm=jpg' , description: 'Lorem ipsum dolor sit.', links:'https://picsum.photos/' },
  ]

 
  return (
    <>
     <main>
       <section className='container'>   
          {cardData.map((card)=>(
             <Card id={card.id}  img={card.src} description={card.description} links={card.links} switcher={switcher}/>
            ))  
          }
        </section>
      </main>
    </>
  )
}

export default Main