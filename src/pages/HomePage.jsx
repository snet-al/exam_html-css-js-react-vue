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
    const [error, setError] = useState(null)

    const makeIdList = () => {
        // 1085 photos in photofetcher api
        const N = 1085;
        // Array containing the 1085 photo IDs in order
        const idArray = Array.from({length: N}, (_, i) => i );
        // shuffles the array randomly
        return idArray.toSorted( () => Math.random()-0.5 )
    }
    const [randomIdArray, setRandomIdArray] = useState(makeIdList)

    const fetchNewPhotos = () => {
        setCurrentPhotos([])
        setRandomIdArray(makeIdList)
        setCurrentIndex(0)
        loadPhotos()
    }

    const loadPhotos = async (N = 4) => {
        if (loading) return;
        setLoading(true);
        for(let b = 0; b < N; b++){
            try{
                const photo = await Photos.getPhotos(randomIdArray[currentIndex + b])
                setCurrentPhotos((prev) => [...prev, photo])
            }catch(error){
                setError(error)
                console.log(error + "\nbasically the photo id doesn`t exist")
                // if theres an error try to load another one so theres still 4 photos loadied instead of 3 or less
                N++;
            }
        }
        setCurrentIndex((prev) => prev + N)
        setLoading(false)
    }

    const toggleGray = (e) => {
        e.target.classList.toggle("active-class");
        setIsGray(!isGray)
        isGray? setGrayScale(""): setGrayScale("?grayscale")
    }


    useEffect(() => {
        loadPhotos()
        
    }, [])


    return (
        <main>
            <header className="button-section">
                <Button onClick={toggleGray} label="Make Greyscale" className="grayScaleBtn" />
                <Button onClick={fetchNewPhotos} label="Fetch New Photos" className="fetchBtn" />
            </header>

            <PhotoGrid currentPhotos ={currentPhotos} grayScale={grayScale}/>

            <footer className="load-more-section">
                <Button onClick={() => loadPhotos()} className="loadBtn" label="Load More Photos" />
            </footer>    
        </main>
    )
}

export default HomePage