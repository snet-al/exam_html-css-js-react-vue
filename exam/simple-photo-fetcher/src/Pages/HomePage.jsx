import React, { useState, useEffect } from 'react'
import Header from '../components/UI/Header.jsx'
import Controls from '../components/Controls.jsx'
import Grid from '../components/UI/Grid.jsx'
import Footer from '../components/UI/Footer.jsx'

//to be impemented
function getPhotos(count) {
    const photos = [];
    for (let i = 0; i < count; i++) {
        photos.push(`https://picsum.photos{Math.floor(Math.random() * 1000)}`);
    }
    return photos;
}

const PHOTO_COUNT = 4;

function HomePage() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [grayscale, setGrayscale] = useState(false);

    useEffect(() => {
        setLoading(true);
        // Uses the local function directly
        const newPhotos = getPhotos(PHOTO_COUNT); 
        setPhotos(newPhotos);
        setLoading(false);
    }, []);

    const handleRefresh = () => {
        setLoading(true);
        // Uses the local function directly
        const newPhotos = getPhotos(PHOTO_COUNT); 
        setPhotos(newPhotos);
        setLoading(false);
    }

    return (
        <div className="home-page">
            <Header />
            <Controls grayscale={grayscale} setGrayscale={setGrayscale} onRefresh={handleRefresh} />
            <Grid photos={photos} loading={loading} grayscale={grayscale} />
            <Footer />
        </div>
    )
}

export default HomePage;
