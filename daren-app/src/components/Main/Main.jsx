
import React from 'react'
import "./Main.css"
import Card from "../UI/Card/Card"
import { useGlobalContext } from '../../context/context'
import data from "../../store/dummyData.json"

const Main = () => {
  const {switcher}=useGlobalContext()
 
  return (
    <>
     <main>
       <section className='container'>   
          {data.map((card)=>(
             <Card id={card.id}  img={card.src} description={card.description} links={card.links} switcher={switcher}/>
            ))  
          }
        </section>
      </main>
    </>
  )
}

export default Main