const ImageCard = ({ image, index }) => {
  return (
    <figure className="photo" key={0}>
      <img src={image.url} alt={`Photo ${index + 1}`} />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
};

export default ImageCard;
