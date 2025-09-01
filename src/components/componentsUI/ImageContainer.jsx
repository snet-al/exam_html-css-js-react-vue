import './ImageContainer.css'

export function ImageContainer() {
  return (
    <a href="#" className="image-container">
      <img src="https://picsum.photos/367/275" alt="Random Photo" className="image" />
      <div className="image-info">
        <h2>Hello</h2>
        <p>paragraph</p>
      </div>
    </a>
  )
}