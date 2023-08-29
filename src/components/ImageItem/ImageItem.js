import React from "react";

const ImageItem = ({ data, isGrayscale }) => {
  const imageUrl = isGrayscale
    ? `${data.download_url}?grayscale`
    : data.download_url;

  return (
    <figure className="section-item">
      <img
        src={isGrayscale ? `${data.download_url}?grayscale` : data.download_url}
        alt={`Image by ${data.author}`}
      />
      <figcaption className="image-information">{data.author}</figcaption>
      <a className="image-url" href={data.url}>
        {data.url}
      </a>
    </figure>
  );
};

export default ImageItem;
