import { createContext, useState, useContext, useEffect } from "react";

const PhotoContext = createContext();

export function PhotoProvider({ children }) {
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 50) + 1;
      const response = await fetch(`https://picsum.photos/v2/list?page=${randomPage}&limit=4`);
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
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
