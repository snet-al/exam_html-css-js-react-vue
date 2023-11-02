import React from "react";

const ImageItem = ({ image, grayscale }) => {
  const imageUrl = grayscale ? `${image.download_url}?grayscale` : image.download_url;

  const imageElement = (
    <img src={imageUrl} alt={`Image by ${image.author}`} />
  );
  const authorElement = (
    <figcaption className="image-information">{image.author}</figcaption>
  );
  const urlElement = (
    <a className="image-url" href={image.url}>
      {image.url}
    </a>
  );

  return (
    <figure className="section-item">
      {imageElement}
      {authorElement}
      {urlElement}
    </figure>
  );
};

export default ImageItem;
