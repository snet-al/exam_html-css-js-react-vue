import Button from "../components/UI/Button.jsx"
import PhotoGrid from "../components/PhotoGrid.jsx"
import { useEffect, useState } from "react"
import { Photos } from "../services/Photos.js"
import "../styles/Home.css"

function HomePage () {

    const [currentPhotos, setCurrentPhotos] = useState([])
    const [grayScale, setGrayScale] = useState("")
    const [isGray, setIsGray] = useState(false)
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)

    const randomPage = () => Math.floor(Math.random() * 248) + 1

    const fetchNewPhotos = () => {
        setCurrentPhotos([])
        loadPhotos()
    }

    const loadPhotos = async (N = 4) => {
        if (loading) return;
        setLoading(true);
        try{
            const photoPage = await Photos.getPhotos(randomPage(), N)
            setCurrentPhotos((prev) => [...prev, ...photoPage])
            setCurrentIndex((prev) => prev + 1)
        }catch(error){
            setErr(error)
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    const toggleGray = (e) => {
        setIsGray(!isGray)
        isGray? setGrayScale(""): setGrayScale("?grayscale")
    }


    useEffect(() => {
        loadPhotos()
        
    }, [])


    return (
        <main>
            <header className="button-section">
                <Button onClick={toggleGray} 
                        label="Make Greyscale" 
                        className={`grayScaleBtn ${isGray? "active-class" : ""}`} />

                <Button onClick={fetchNewPhotos} label="Fetch New Photos" className="fetchBtn" />
            </header>

            <PhotoGrid currentPhotos={currentPhotos} grayScale={grayScale}/>

            <footer className="load-more-section">
                <Button onClick={() => loadPhotos()} className="loadBtn" label="Load More Photos" />
            </footer>    
        </main>
    )
}

export default HomePage