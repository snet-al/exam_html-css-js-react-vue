import { useState, useEffect } from 'react'
import Cart from '../card.jsx'

function HomePage() {
    const [photos, setPhotos] = useState([])
    const [grayscale, setGrayscale] = useState(false)

    function fetchPhotos() {
        const randomPage = Math.floor(Math.random() * 50)
        fetch(`https://picsum.photos/v2/list?limit=4&page=${randomPage}`)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }

    useEffect(() => {
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
                        }}
                        grayscale={grayscale}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePage