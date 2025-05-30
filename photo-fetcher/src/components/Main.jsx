import { useAppContext } from "../App"
import ImageCreator from "./UI/ImageCreator"

function Main(){
    const {images,grayscale} = useAppContext()
    return(
        <main className="images-container" style={{filter:grayscale?"grayscale(100%)":"grayscale(0%)"}}>
            {images.map((img,index)=>(
                //Index because the id is the same because of the dummyData
                <ImageCreator key={index} img={img}/>
            ))}
        </main>
    )
}
export default Main