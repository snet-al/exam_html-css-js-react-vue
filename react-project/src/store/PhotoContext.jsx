import { createContext, useState, useContext, useEffect } from "react";
import { fetchPhotosFromApi } from "../services/photoService";

const PhotoContext = createContext();

export function PhotoProvider({ children }) {
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 50) + 1;
      const data = await fetchPhotosFromApi(randomPage, 4);
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching photos in provider:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <PhotoContext.Provider value={{ isGrayscale, setIsGrayscale, photos, fetchPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
}

export const usePhotos = () => useContext(PhotoContext);
