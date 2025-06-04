import '../../index.css'
import { useApi } from '../../services/apiContext';
import { useEffect } from 'react';
function Body(){

    const {imageData,fetchData,makePhotosGrayscale}=useApi()
    useEffect(()=>{
        fetchData()
    },[])



return (
    <>
        <main className="mainContent">

            {imageData.map((imageInfo,index)=>(
                <section className={makePhotosGrayscale?"imageContainer makePhotosGrayScale":"imageContainer"} key={index}>
                        
                    <img src={imageInfo.download_url} alt="Random Image" className="randomImage"/>
                        
                    <article className="imageInfo">
                        <p>{imageInfo.author}</p>
                        <p>{imageInfo.url}</p>
                    </article>
        
                </section>
            ))}
    
        </main>
    </>
)
}
export default Body