import '../../index.css'
import { useState ,useEffect } from 'react'

function Body(){

    const [images,setImages]=useState([])

    async function fetchDummyData() {

    const response = await fetch('/STORE/Data.json');
    const data = await response.json();

    console.log("Fetched data:", data); 

    setImages(data.dummyData);
  
}


    useEffect(()=>{
        fetchDummyData()
        console.log(images,"hello")
    },[])


return (
    <>
      <main className="mainContent">
    
                <section className="imageContainer">
                    
                    <img src={images[0]?.image} alt="Random Image" className="randomImage"/>
                    
                    <article className="imageInfo">
                        <p>Author</p>
                        <p>Description</p>
                    </article>
    
                </section>
    
                <section className="imageContainer">
                    
                    <img src={images[1]?.image} alt="Random Image" className="randomImage"/>
                    
                    <article className="imageInfo">
                        <p>Author</p>
                        <p>Description</p>
                    </article>
    
                </section>
    
                <section className="imageContainer">
                    
                    <img src={images[2]?.image} alt="Random Image" className="randomImage"/>
                    
                    <article className="imageInfo">
                        <p>Author</p>
                        <p>Description</p>
                    </article>
    
                </section>
    
                <section className="imageContainer">
                    
                    <img src={images[3]?.image} alt="Random Image" className="randomImage"/>
                    
                    <article className="imageInfo">
                        <p>Author</p>
                        <p>Description</p>
                    </article>
    
                </section>
    
            </main>
    </>
)
}
export default Body