import { useState, useEffect } from "react";
import Controls from "../components/UI/Controls";
import PhotoGallery from "../components/UI/PhotoGallery";
import { dummyData } from "../store/dummyData";

export default function Home() {
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [photos, setPhotos] = useState([]);

  const getRandomPhotos = () => {
    const shuffled = [...dummyData].sort(() => 0.5 - Math.random());
    setPhotos(shuffled.slice(0, 4));
  };

  useEffect(() => {
    getRandomPhotos();
  }, []);

  return (
    <>
      <Controls
        isGrayscale={isGrayscale}
        onToggleGrayscale={setIsGrayscale}
        onFetchPhotos={getRandomPhotos}
      />
      <PhotoGallery photos={photos} isGrayscale={isGrayscale} />
    </>
  );
}
