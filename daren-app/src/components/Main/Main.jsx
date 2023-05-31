import React from 'react'
import "./Main.css"
import Card from "../UI/Card/Card"
import { useGlobalContext } from '../../context/context'
import { useState,useEffect } from 'react'
import CardsDataApi from '../../services/apis/CardsDataApi'

const Main = () => {
  const { switcher } = useGlobalContext()
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await CardsDataApi();
        setImageUrl(url);
      } catch (error) {
        console.error(error)
      }
    };
    fetchImage();
  }, []);

 const cardData = [
  { id: 1,src:`${imageUrl}`, description: 'Lorem ipsum dolor sit.', links:'https://picsum.photos/'},
  { id: 2,src:`${imageUrl}`, description: 'Lorem ipsum dolor sit.', links:'https://picsum.photos/'},
  { id: 3,src:`${imageUrl}`, description: 'Lorem ipsum dolor sit.', links:'https://picsum.photos/'},
  { id: 4,src:`${imageUrl}`, description: 'Lorem ipsum dolor sit.', links:'https://picsum.photos/'},
]

  return (
    <>
     <main>
       <section className='container'>   
          {cardData.map((card)=>(
             <Card key={card.id} img={card.src} description={card.description} links={card.links} switcher={switcher}/>
            ))  
          }
        </section>
      </main>
    </>
  )
}

export default Main