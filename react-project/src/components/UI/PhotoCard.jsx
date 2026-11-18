export default function PhotoCard({ photo, isGrayscale }) {
  const imageUrl = `https://picsum.photos/id/${photo.id}/400/300${isGrayscale ? '?grayscale' : ''}`;

  return (
    <figure className="photo-card">
      <img src={imageUrl} alt={`Photo by ${photo.author}`} />
      <figcaption className="photo-info">
        <p className="photo-author">{photo.author}</p>
        <p className="photo-url">{photo.url}</p>
      </figcaption>
    </figure>
  );
}
