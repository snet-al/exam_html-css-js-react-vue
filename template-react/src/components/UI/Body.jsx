import '../../index.css'
import image from '../../download.jpg'

function Body(){
return (
    <>
      <main className="mainContent">
    
                <section className="imageContainer">
                    
                    <img src={image} alt="Random Image" className="randomImage"/>
                    
                    <article className="imageInfo">
                        <p>Author</p>
                        <p>Description</p>
                    </article>
    
                </section>
    
                <section className="imageContainer">
                    
                    <img src={image} alt="Random Image" className="randomImage"/>
                    
                    <article className="imageInfo">
                        <p>Author</p>
                        <p>Description</p>
                    </article>
    
                </section>
    
                <section className="imageContainer">
                    
                    <img src={image} alt="Random Image" className="randomImage"/>
                    
                    <article className="imageInfo">
                        <p>Author</p>
                        <p>Description</p>
                    </article>
    
                </section>
    
                <section className="imageContainer">
                    
                    <img src={image} alt="Random Image" className="randomImage"/>
                    
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