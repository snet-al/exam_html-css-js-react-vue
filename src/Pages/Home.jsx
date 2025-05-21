import { useState } from "react";
import Photos from "../components/Layout/Photos"; 
import Buttons from "../components/UI/Buttons";
import Header from "../components/PageHeader/Header"; 
import "../generalstyles.css";
import DUMMYPHOTOS from "../Store/data";
import PhotoSkeleton from "../components/UI/PhotoSkeleton";

export default function Home() {
  const [grayscale, setGrayscale] = useState(false);
  const [images, setImages] = useState(DUMMYPHOTOS);
  const [isLoading, setIsLoading] = useState(false);        // For full replacement
  const [isAddingMore, setIsAddingMore] = useState(false);  // For add-more loading

  // Fetch new images
  const fetchImages = async (replace = true) => {
    if (replace) {
      setIsLoading(true);
    } else {
      setIsAddingMore(true);
    }

    try {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100)}&limit=4`
      );
      const data = await res.json();

      const newImages = data.map((img) => ({
        src: `https://picsum.photos/id/${img.id}/200/300?random=${Math.random()}`,
        link: img.url,
        author: img.author,
      }));

      setImages((prev) => (replace ? newImages : [...prev, ...newImages]));
    } catch (err) {
      console.error("Failed to fetch images:", err);
    } finally {
      if (replace) {
        setIsLoading(false);
      } else {
        setIsAddingMore(false);
      }
    }
  };

  // Optional

  // useEffect(() => {
  //   fetchImages(); 
  // }, []);

  if (isLoading) {
    return <PhotoSkeleton count={4} />;
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
