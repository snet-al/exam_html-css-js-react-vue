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
    const [currentIndex, setCurrentIndex] = useState(0)
    const [err, setErr] = useState(null)

    const makePageList = () => {
        // 1085 photos in photofetcher api
        const N = 248;
        // Array containing the 1085 photo IDs in order
        const pageArray = Array.from({length: N}, (_, i) => i );
        // shuffles the array randomly
        return pageArray.toSorted( () => Math.random()-0.5 )
    }
    const [randomPageArray, setRandomPageArray] = useState(makePageList)

    const fetchNewPhotos = () => {
        setCurrentPhotos([])
        setRandomPageArray(makePageList)
        setCurrentIndex(0)
        loadPhotos()
    }

    const loadPhotos = async (N = 4) => {
        if (loading) return;
        setLoading(true);
        try{
            const photoPage = await Photos.getPhotos(randomPageArray[currentIndex], N)
            setCurrentPhotos((prev) => [...prev, ...photoPage])
            setCurrentIndex((prev) => prev + 1)
            console.log(randomPageArray[currentIndex])
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