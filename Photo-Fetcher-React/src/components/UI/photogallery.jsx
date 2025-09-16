import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoGallery = ({ photos, isGrayscale, loading }) => {
  if (photos.length === 0 && !loading) {
    return (
      <div className="text-center py-8 text-gray-500">
        No photos loaded. Click "Fetch New Photos" to start!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-8">
      {photos.map(photo => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isGrayscale={isGrayscale}
        />
      ))}
    </div>
  );
};


export default PhotoGallery;
