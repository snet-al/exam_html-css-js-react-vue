import { useState } from "react";
import { Toolbar } from "../components/Toolbar";
import { ImageGrid } from "../components/ImageGrid";
import { dummyData } from "../store/dummyData";
import { selectNewPhotos, morePhotos } from "../utils/imageSelector";

export function HomePage() {
  const [images, setImages] = useState(
    JSON.parse(sessionStorage.getItem("loadedImages")) || []
  );
  const [isGrey, setIsGrey] = useState(false);

  //ben replace fotot ekzistente me 4 foto te reja
  const fetchPhotos = () => {
    const selected = selectNewPhotos(images, dummyData);
    setImages(selected);
    sessionStorage.setItem("loadedImages", JSON.stringify(selected));
  };
  //ben add 4 foto te reja
  const addMorePhotos = () => {
    const newImages = morePhotos(images, dummyData);
    setImages(newImages);
    sessionStorage.setItem("loadedImages", JSON.stringify(newImages));
  };

  return (
    <div className="home-page">
      <Toolbar
        isGrey={isGrey}
        setIsGrey={setIsGrey}
        fetchPhotos={fetchPhotos}
      />
      <ImageGrid images={images} isGrey={isGrey} />
      <button
        className={`more-photos-button 
      ${images.length === 0 && "more-photos-hide"}`}
        onClick={addMorePhotos}
      >
        More Photos
      </button>
    </div>
  );
}
