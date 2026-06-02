function PhotoCard() {
  return (
    <article className="card">
      <img src="https://picsum.photos/400/300?random=1" alt="photo" />
      <div className="card-content">
        <h3>Lukas Budimaier</h3>
        <p>
          <a href="https://unsplash.com/photos" target="_blank" rel="noreferrer">
            https://unsplash.com/photos
          </a>
        </p>
      </div>
    </article>
  );
}

export default PhotoCard;