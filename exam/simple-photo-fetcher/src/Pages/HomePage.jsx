import Header from '../components/Header.jsx'
import Controls from '../components/Controls.jsx'
import Grid from '../components/UI/Grid.jsx'
import Footer from '../components/Footer.jsx'
import { useState, useEffect } from 'react'
import photoService from '../services/photoService.js'

function HomePage() {
   
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [grayscale, setGrayscale] = useState(false);
    const [error, setError] = useState('');

    const loadPhotos = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await photoService.fetchPhotos();
            setPhotos(data);
        } catch (err) {
            setError('Failed to load photos. Please try again.');
            setPhotos([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPhotos();
    }, []);

    const handleRefresh = () => {
        loadPhotos();
    }

    return (
        <div className="home-page">
            <Header />
            <Controls grayscale={grayscale} setGrayscale={setGrayscale} onRefresh={handleRefresh} />
            {error ? <p className="error-message">{error}</p> : null}
            <Grid photos={photos} loading={loading} grayscale={grayscale} />
            <Footer />
        </div>
    )
}

export default HomePage;
