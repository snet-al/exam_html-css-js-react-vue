import { useState, useEffect } from 'react';
import Header from '../components/UI/Header';
import Controls from '../components/UI/Controls';
import PhotoGallery from '../components/UI/PhotoGallery';

export default function Home() {
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=3');
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="container">
      <Header />
      <main className="container">
        <Controls 
          isGrayscale={isGrayscale} 
          onToggleGrayscale={setIsGrayscale} 
          onFetchPhotos={fetchPhotos} 
        />
        <PhotoGallery photos={photos} isGrayscale={isGrayscale} />
      </main>
    </div>
  );
}
