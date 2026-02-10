export default function PhotoCard({ photo, grayscale }) {
  return (
    <article className="card">
      <img
        className={`img ${grayscale ? "is-gray" : ""}`}
        src={photo.download_url}
        alt={photo.author}
        loading="lazy"
      />
      <div className="overlay">
        <p className="author">{photo.author}</p>
        <a className="link" href={photo.url} target="_blank" rel="noreferrer">
          {photo.url}
        </a>
      </div>
    </article>
  );
}
