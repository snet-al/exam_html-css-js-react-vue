import React from 'react'
import "./Main.css"
import Card from '../Card/Card'
import Image from '../../assests/images/img.jpg'
import { useGlobalContext } from '../../context/context'

const Main = () => {
  const {switcher}=useGlobalContext()
  const cardData=[
    { id: 1, img: `${Image}`, description: 'Lorem ipsum dolor sit.' },
    { id: 2, img: `${Image}`, description: 'Lorem ipsum dolor sit.' },
    { id: 3, img: `${Image}`, description: 'Lorem ipsum dolor sit.' },
    { id: 4, img: `${Image}`, description: 'Lorem ipsum dolor sit.' },
  ]

  const displayImages= cardData.map((card)=>(
    <>
     <Card id={card.id}  img={card.img} description={card.description} switcher={switcher}/>
    </>
 ))
  return (
    <>
     <main>
       <section className='container'>   
          {
            cardData.map((card)=>(
              <>
               <Card id={card.id}  img={card.img} description={card.description} switcher={switcher}/>
              </>
            ))
          }
        </section>
      </main>
    </>
  )
}

export default Main