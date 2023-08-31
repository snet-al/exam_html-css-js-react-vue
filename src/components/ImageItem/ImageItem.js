import React from "react";

const ImageItem = ({ image, isGrayscale }) => {
  const imageUrl = isGrayscale
    ? `${image.download_url}?grayscale`
    : image.download_url;

  return (
    <figure className="section-item">
      <img
        src={imageUrl}
        alt={`Image by ${image.author}`}
      />
      <figcaption className="image-information">{image.author}</figcaption>
      <a className="image-url" href={image.url}>
        {image.url}
      </a>
    </figure>
  );
};

export default ImageItem;
