import { useState, useEffect } from 'react'
import Layout from '../layout/Layout.jsx'
import Toggle from '../components/UI/Toggle.jsx'
import Button from '../components/UI/Button.jsx'
import Card from '../components/UI/Card.jsx'
import dummyData from '../store/dummyData.js'

function HomePage() {
    const [photos, setPhotos] = useState(dummyData)
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
        <Layout>
            <div className="full">
                <Toggle onChange={() => setGrayscale(!grayscale)} />
                <Button label="Fetch New Photos" onClick={fetchPhotos} />
            </div>
            <div className="holder">
                {photos.map(photo => (
                    <Card
                        key={photo.id}
                        photo={{
                            image: photo.download_url || photo.image,
                            name: photo.author || photo.name,
                            link: photo.url || photo.link
                        }}
                        grayscale={grayscale}
                    />
                ))}
            </div>
        </Layout>
    )
}

export default HomePage