// components/UI/PhotoCard.jsx
import React from 'react';

const PhotoCard = ({ photo, isGrayscale }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x600/e5e7eb/6b7280?text=Image+Not+Found';
    e.target.alt = 'Image not found';
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
      <img
        src={`https://picsum.photos/id/${photo.id}/400/600`}
        alt={`Photo by ${photo.author}`}
        className={`w-full h-[300px] object-cover transition-filter ${isGrayscale ? 'grayscale' : ''}`}
        loading="lazy"
        onError={handleImageError}
      />
      <div className="p-6">
        <h3 className="text-gray-800 mb-2 text-lg font-medium">Photo by {photo.author}</h3>
        <p className="text-gray-600 text-sm">ID: {photo.id}</p>
        <p className="text-gray-600 text-sm">{photo.width} × {photo.height}</p>
      </div>
    </div>
  );
};

export default PhotoCard;