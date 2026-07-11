import Header from '../components/Header.jsx'
import Controls from '../components/Controls.jsx'
import Grid from '../components/UI/Grid.jsx'
import Footer from '../components/Footer.jsx'
import { useState } from 'react'

import { dummyData } from '../Store/Store.js' 


function HomePage() {
   
    const [photos, setPhotos] = useState(dummyData);
    const [loading, setLoading] = useState(false);
    const [grayscale, setGrayscale] = useState(false);

    const handleRefresh = () => {
        setLoading(true);
    
        setPhotos(dummyData); 
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
