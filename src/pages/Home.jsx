import GreyScaleBtn from "../components/UI/GrayScaleBtn"
import FetchBtn from '../components/UI/FetchBtn'
import LoadBtn from '../components/UI/LoadBtn'
import PhotoCard from "../components/PhotoCard"
import { useEffect, useState } from "react"
import {loadPhoto} from "../services/api.js"
import "../css/Home.css"

function Home () {

    const [currentPhotos, setCurrentPhotos] = useState([])
    const [makeGray, setMakeGray] = useState("")
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

    const fetchNewPhotosFunction = () => {
        setCurrentPhotos([])
        setRandomIdArray(makeIdList)
        setCurrentIndex(0)
        load4Photos()
    }

    const load4Photos = async () => {
        if (loading) return;
        setLoading(true);
        for(let b = 0; b < 4; b++){
            try{
                const photo = await loadPhoto(randomIdArray[currentIndex + b])
                setCurrentPhotos((prev) => [...prev, photo])
            }catch(error){
                setError(error)
                console.log(error)
                // const photo = await loadPhoto(randomIdArray[currentIndex + (b - 1)])
                // setCurrentPhotos((prev) => [...prev, photo])
            }
        }
        setCurrentIndex((prev) => prev + 4)
        setLoading(false)
    }

    const makeGreyFunc = (isgray) => {
        isgray? setMakeGray("?grayscale"): setMakeGray("")
    }


    useEffect(() => {
        load4Photos()
        
    }, [])


    return (
        <main>
            <section className="button-section">
                <GreyScaleBtn onClickFunction={makeGreyFunc}/>
                <FetchBtn onClickFunction={fetchNewPhotosFunction}/>
            </section>


            <section className="photo-grid">
                {currentPhotos.map(photo => <PhotoCard photo={photo} key={photo.id} makeGray={makeGray}/>)}
            </section>

            
            <section className="load-more-section">
                <LoadBtn onClickFunction={load4Photos}/>
            </section>    
        </main>
    )
}

export default Home