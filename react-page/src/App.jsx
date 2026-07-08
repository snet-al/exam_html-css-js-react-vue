import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Toggle from './components/UI/Toggle.jsx'
import Button from './components/UI/Button.jsx'
import Card from './components/UI/Card.jsx'
import './photos.css'

function App() {
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
            <Header />
            <div className="full">
                <Toggle onChange={() => setGrayscale(!grayscale)} />
                <Button label="Fetch New Photos" onClick={fetchPhotos} />
            </div>
            <div className="holder">
                {photos.map(photo => (
                    <Card
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
            <Footer />
        </div>
    )
}

export default App