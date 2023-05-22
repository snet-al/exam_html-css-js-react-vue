import React from 'react'
import "./Main.css"
import Card from '../UI/Card/Card'
import Image from "../../assests/images/img.jpg"
import { useGlobalContext } from '../../context/context'

const Main = (props) => {
  const {switcher}=useGlobalContext()

  const cardData = [
    { id: 1, img: `${Image}`, description: 'Bledi ipsum dolor sit.' },
    { id: 2, img: `${Image}`, description: 'Daren ipsum dolor sit.' },
    { id: 3, img: `${Image}`, description: 'Devi ipsum dolor sit.' },
    { id: 4, img: `${Image}`, description: 'Asip ipsum dolor sit.' },
  ]

  return (
    <>
     <main>
       <section className='container'>   
         {cardData.map((card)=> (
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