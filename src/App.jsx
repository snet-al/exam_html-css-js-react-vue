import React, { useState } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const DEFAULT_PHOTO_IDS = [10, 20, 30, 40];
const IMAGE_DIMENSIONS = {
  width: 400,
  height: 300
};

function App() {
  const [images, setImages] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPhotoInfo = async (photoId) => {
    const infoResponse = await fetch(`https://picsum.photos/id/${photoId}/info`);
    return await infoResponse.json();
  };

  const fetchPhotos = async (count) => {
    const photos = [];
    for (let i = 0; i < count; i++) {
      const randomId = Math.floor(Math.random() * 1000) + 1;
      const { width, height } = IMAGE_DIMENSIONS;
      
      try {
        const photoInfo = await fetchPhotoInfo(randomId);
        
        const src = `https://picsum.photos/id/${randomId}/${width}/${height}`;
        photos.push({ 
          id: Date.now() + Math.random() + i, 
          src, 
          alt: `Photo by ${photoInfo.author}`,
          photographer: photoInfo.author,
          link: photoInfo.url 
        });
      } catch (error) {
        const src = `https://picsum.photos/id/${randomId}/${width}/${height}`;
        photos.push({ 
          id: Date.now() + Math.random() + i, 
          src, 
          alt: `Random Photo ${i + 1}`,
          photographer: "Unknown Photographer",
          link: `https://picsum.photos/images#${randomId}`
        });
      }
    }
    return photos;
  };

  const getInitialPhotos = async () => {
    const photos = [];
    
    for (let i = 0; i < DEFAULT_PHOTO_IDS.length; i++) {
      const id = DEFAULT_PHOTO_IDS[i];
      const { width, height } = IMAGE_DIMENSIONS;
      
      try {
        const photoInfo = await fetchPhotoInfo(id);
        
        photos.push({
          id: id,
          src: `https://picsum.photos/id/${id}/${width}/${height}`,
          alt: `Photo by ${photoInfo.author}`,
          photographer: photoInfo.author,
          link: photoInfo.url
        });
      } catch (error) {
        photos.push({
          id: id,
          src: `https://picsum.photos/id/${id}/${width}/${height}`,
          alt: `Random Photo ${i + 1}`,
          photographer: "Unknown Photographer",
          link: `https://picsum.photos/images#${id}`
        });
      }
    }
    return photos;
  };

  React.useEffect(() => {
    const loadPhotos = async () => {
      const initialPhotos = await getInitialPhotos();
      setImages(initialPhotos);
      setLoading(false);
    };
    loadPhotos();
  }, []);

  const handleFetchPhotos = async () => {
    setLoading(true);
    try {
      const currentCount = images.length;
      const newPhotos = await fetchPhotos(currentCount); 
      setImages(newPhotos);
    } catch (error) {
      console.error('Failed to fetch photos:', error);
    }
    setLoading(false);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const morePhotos = await fetchPhotos(4); 
      setImages(prevImages => [...prevImages, ...morePhotos]);
    } catch (error) {
      console.error('Failed to load more photos:', error);
    }
    setLoading(false);
  };

  const handleToggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
  };

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <main className="container">
      <Header 
        handleFetchPhotos={handleFetchPhotos}
        handleToggleGrayscale={handleToggleGrayscale}
        isGrayscale={isGrayscale}
        loading={loading}
      />
      <section className={`image-grid ${isGrayscale ? 'grayscale' : ''}`}>
        {images.map((photo) => (
          <ImageContainer 
            key={photo.id}
            src={photo.src} 
            alt={photo.alt} 
            photographer={photo.photographer}
            onClick={() => handleImageClick(photo.link)}
          />
        ))}
      </section>
      <Footer handleLoadMore={handleLoadMore} loading={loading} />
    </main>
  );
}

export default App;