import { useState, useEffect } from 'react';
import Controls from '../components/UI/Controls';
import PhotoGallery from '../components/UI/PhotoGallery';
import { fetchPhotosFromApi } from '../services/photoService';

export default function Home() {
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [photos, setPhotos] = useState([]);

  const loadPhotos = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 50) + 1;
      const data = await fetchPhotosFromApi(randomPage, 4);
      setPhotos(data);
    } catch (error) {
      console.error('Error loading photos:', error);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <>
      <Controls
        isGrayscale={isGrayscale}
        onToggleGrayscale={setIsGrayscale}
        onFetchPhotos={loadPhotos}
      />
      <PhotoGallery photos={photos} isGrayscale={isGrayscale} />
    </>
  );
}
