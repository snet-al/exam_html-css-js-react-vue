import React, { useState, useEffect } from 'react';
import Header from './components/UI/header';
import PhotoGallery from './components/UI/photogallery';
import GrayscaleToggle from './components/UI/grayscaletoggle';
import Button from './components/UI/button';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPhotos = async (limit = 4, append = false) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const page = Math.floor(Math.random() * 10) + 1;
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }
      
      const data = await response.json();
      setPhotos(prev => append ? [...prev, ...data] : data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <GrayscaleToggle 
            isGrayscale={isGrayscale}
            onToggle={() => setIsGrayscale(prev => !prev)}
          />
          <Button 
            onClick={() => fetchPhotos(4, false)}
            disabled={isLoading}
            variant="primary"
          >
            {isLoading ? 'Loading...' : 'Fetch New Photos'}
          </Button>
        </div>

        {error ? (
          <div className="text-center text-red-600 py-8">
            <p>{error}</p>
            <Button 
              onClick={() => fetchPhotos(4, false)}
              variant="secondary"
              className="mt-4"
            >
              Retry
            </Button>
          </div>
        ) : (
          <>
            <PhotoGallery 
              photos={photos}
              isGrayscale={isGrayscale}
              loading={isLoading}
            />
            
            <div className="text-center mt-8">
              <Button 
                onClick={() => fetchPhotos(4, true)}
                disabled={isLoading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
              >
                {isLoading ? 'Loading...' : 'Load More'}
              </Button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;