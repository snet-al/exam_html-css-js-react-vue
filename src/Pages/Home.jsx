import { useState } from "react";
import Photos from "../components/UI/Photos.jsx";
import Buttons from "../components/UI/Buttons";
import Header from "../components/PageHeader/Header";
import "../generalstyles.css";
import DUMMYPHOTOS from "../Store/data";
import PhotoSkeleton from "../components/UI/PhotoSkeleton";
import { PhotoService } from "../Services/photo.service.js";
import Layout from "../Layout/Layout.jsx";

const photoService = new PhotoService(4);

export default function Home() {
  const [grayscale, setGrayscale] = useState(false);
  const [images, setImages] = useState(DUMMYPHOTOS);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingMore, setIsAddingMore] = useState(false);

  const fetchImages = async (replace = true) => {
    if (replace) setIsLoading(true);
    else setIsAddingMore(true);

    try {
      const newImages = await photoService.fetchPhotos(); 
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
    <Layout>
      
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
    </Layout>
  );
}
