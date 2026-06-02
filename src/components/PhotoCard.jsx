function PhotoCard({ photo }) {
  return (
    <article className="card">
      <img src={photo.download_url} alt={`Photo by ${photo.author}`} />
      <div className="card-content">
        <h3>{photo.author}</h3>
        <p>
          <a href={photo.url} target="_blank" rel="noreferrer">
            {photo.url}
          </a>
        </p>
      </div>
    </article>
  );
}

export default PhotoCard;