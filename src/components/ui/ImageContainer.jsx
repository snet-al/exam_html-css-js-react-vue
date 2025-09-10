export function ImageContainer({ src, href, author }) {
  return (
    <a href={href} className="image-container">
      <img src={src} alt="Random Photo" className="image" />
      <div className="image-info">
        <h2>{author}</h2>
        <p>{href}</p>
      </div>
    </a>
  );
}
