import { useState, useEffect } from 'react'
import Cart from './card.jsx'
import './photos.css'

function App() {
    const [photos, setPhotos] = useState([])//stores the fetched photos
    const [grayscale, setGrayscale] = useState(false)//controls if photos are shown in grayscale

    function fetchPhotos() {
        // gets 4 random photos from picsum
        const randomPage = Math.floor(Math.random() * 50)//gets a random number
        fetch(`https://picsum.photos/v2/list?limit=4&page=${randomPage}`)//request photos from the api
            .then(res => res.json())//convert the response to json
            .then(data => setPhotos(data))//saves the fetched photos in state
    }

    // fetch photos once when page loads
    useEffect(() => {//runs the code after render
        fetchPhotos()
    }, [])

    return (
        <div>
            <header><h1>Photo Fetcher</h1></header>

            <div className="full">
                <div className="toggle-row">
                    <label className="switch">
                        <input type="checkbox" onChange={() => setGrayscale(!grayscale)} />
                        <span className="slider"></span>
                    </label>
                    <span className="label-text">Make photos grayscale</span>
                </div>
                <button className="fetch-btn" onClick={fetchPhotos}>Fetch New Photos</button>
            </div>

            <div className="holder">
                {photos.map(photo => (
                    <Cart
                        key={photo.id}
                        photo={{
                            image: photo.download_url,
                            name: photo.author,
                            link: photo.url
                        }}//using Cart from cart.jsx and passing it data
                        grayscale={grayscale}
                    />//prepares the carts holder
                ))}
            </div>
        </div>
    )
}

export default App