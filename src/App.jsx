import React, { useState } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const fetchPhotos = async (count = 4) => {
    const imageList = [];
    for (let i = 0; i < count; i++) {
        const randomId = Math.floor(Math.random() * 1000) + 1;
        const width = 400;
        const height = 300;
        
        try {
            const infoResponse = await fetch(`https://picsum.photos/id/${randomId}/info`);
            const photoInfo = await infoResponse.json();
            
            const src = `https://picsum.photos/id/${randomId}/${width}/${height}`;
            imageList.push({ 
                id: Date.now() + Math.random() + i, 
                src, 
                alt: `Photo by ${photoInfo.author}`,
                photographer: photoInfo.author,
                link: photoInfo.url 
            });
        } catch (error) {
            const src = `https://picsum.photos/id/${randomId}/${width}/${height}`;
            imageList.push({ 
                id: Date.now() + Math.random() + i, 
                src, 
                alt: `Random Photo ${i + 1}`,
                photographer: "Unknown Photographer",
                link: `https://picsum.photos/images#${randomId}`
            });
        }
    }
    return imageList;
};

const getInitialPhotos = async () => {
    const photos = [];
    const photoIds = [10, 20, 30, 40];
    
    for (let i = 0; i < photoIds.length; i++) {
        const id = photoIds[i];
        try {
            const infoResponse = await fetch(`https://picsum.photos/id/${id}/info`);
            const photoInfo = await infoResponse.json();
            
            photos.push({
                id: id,
                src: `https://picsum.photos/id/${id}/400/300`,
                alt: `Photo by ${photoInfo.author}`,
                photographer: photoInfo.author,
                link: photoInfo.url
            });
        } catch (error) {
            photos.push({
                id: id,
                src: `https://picsum.photos/id/${id}/400/300`,
                alt: `Random Photo ${i + 1}`,
                photographer: "Unknown Photographer",
                link: `https://picsum.photos/images#${id}`
            });
        }
    }
    return photos;
};

function App() {
  const [images, setImages] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const loadInitialPhotos = async () => {
      const initialPhotos = await getInitialPhotos();
      setImages(initialPhotos);
      setLoading(false);
    };
    loadInitialPhotos();
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
        onFetchPhotos={handleFetchPhotos}
        onToggleGrayscale={handleToggleGrayscale}
        isGrayscale={isGrayscale}
        loading={loading}
      />
      <section className={`image-grid ${isGrayscale ? 'grayscale' : ''}`}>
        {images.map((photo) => (
          <div key={photo.id}>
            <ImageContainer 
              src={photo.src} 
              alt={photo.alt} 
              photographer={photo.photographer}
              onClick={() => handleImageClick(photo.link)}
            />
          </div>
        ))}
      </section>
      <Footer onLoadMore={handleLoadMore} loading={loading} />
    </main>
  );
}

export default App;