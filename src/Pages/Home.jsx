import { useState } from "react";
import Photos from "../components/Layout/Photos";
import Buttons from "../components/UI/Buttons";
import Header from "../components/PageHeader/Header";
import "../generalstyles.css";
import DUMMYPHOTOS from "../Store/data";
import PhotoSkeleton from "../components/UI/PhotoSkeleton";
import { fetchPhotos } from "../services/foto.js"; 

export default function Home() {
  const [grayscale, setGrayscale] = useState(false);
  const [images, setImages] = useState(DUMMYPHOTOS);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingMore, setIsAddingMore] = useState(false);

  const fetchImages = async (replace = true) => {
    if (replace) setIsLoading(true);
    else setIsAddingMore(true);

    try {
      const newImages = await fetchPhotos(4);
      setImages((prev) => (replace ? newImages : [...prev, ...newImages]));
    } catch (err) {
      console.error("Error fetching:", err);
    } finally {
      if (replace) setIsLoading(false);
      else setIsAddingMore(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <PhotoSkeleton count={4} />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="photo-section">
        <div className="buttons-floating">
          <Buttons
            grayscale={grayscale}
            setGrayscale={setGrayscale}
            onFetchNew={() => fetchImages(true)}
          />
        </div>
        <Photos
          images={images}
          grayscale={grayscale}
          onAddMore={() => fetchImages(false)}
        />
        {isAddingMore && <PhotoSkeleton count={4} />} 
      </div>
    </>
  );
}
