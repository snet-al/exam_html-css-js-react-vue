function PhotoCard({ photo, grayscale }) {
  return (
    <article className="card">
      <img 
        src={photo.download_url} 
        alt={`Photo by ${photo.author}`} 
        style={{ 
          filter: grayscale ? "grayscale(100%)" : "none", 
          transition: "filter 0.3s ease" 
        }}
      />
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