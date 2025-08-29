import './ImageContainer.css'

export function ImageContainer({src, href, author, isGrey}) {
  return (
    <div className="image-container">
      <img src={src} alt="Random Photo" className={`image ${isGrey && "image-greyscale"}`} />
      <a href={href} className="image-link">
        <h1>{author}</h1>
        <p>{href}</p>
      </a>
    </div>
  )
}