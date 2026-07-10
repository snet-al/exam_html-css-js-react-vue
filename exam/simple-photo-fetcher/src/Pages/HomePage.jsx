import React, { useState, useEffect } from 'react'
import Header from '../components/UI/Header'
import Controls from '../components/Controls'
import Grid from '../components/UI/Grid'
import Footer from '../components/UI/Footer'



function HomePage() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [grayscale, setGrayscale] = useState(false);

    useEffect(() => {
        setLoading(true);
        const newPhotos = getPhotos(photoCount);
        setPhotos(newPhotos);
        setLoading(false);
    }
, []);

    const handleRefresh = () => {
        setLoading(true);
        const newPhotos = getPhotos(photoCount);
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
