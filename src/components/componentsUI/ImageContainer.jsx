import './ImageContainer.css'

export function ImageContainer() {
  return (
    <div className="image-container">
      <img src="https://picsum.photos/id/237/367/275" alt="Random Photo" className="image" />
      <a href="#" className="image-link">
        <h1>Hello</h1>
        <p>paragraph</p>
      </a>
    </div>
  )
}