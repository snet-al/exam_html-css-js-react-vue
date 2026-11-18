import Controls from '../components/UI/Controls';
import PhotoGallery from '../components/UI/PhotoGallery';
import { usePhotos } from '../store/PhotoContext';

export default function Home() {
  const { isGrayscale, setIsGrayscale, photos, fetchPhotos } = usePhotos();

  return (
    <>
      <Controls 
        isGrayscale={isGrayscale} 
        onToggleGrayscale={setIsGrayscale} 
        onFetchPhotos={fetchPhotos} 
      />
      <PhotoGallery photos={photos} isGrayscale={isGrayscale} />
    </>
  );
}
