import './ImageContainer.css'

export function ImageContainer({src, href, author, isGrey}) {
  return (
    <a href={href} className="image-container">
      <img src={src} alt="Random Photo" className={`image ${isGrey && "image-greyscale"}`} />
      <div className="image-info">
        <h2>{author}</h2>
        <p>{href}</p>
      </div>
    </a>
  )
}