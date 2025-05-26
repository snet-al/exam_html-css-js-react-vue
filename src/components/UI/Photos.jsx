import "../../generalstyles.css";
import "./photos.css";

export default function Photos({ images, grayscale, onAddMore }) {
  return (
    <div className="photo-grid-wrapper">
      <div className="photo-grid">
        {images.map((image, index) => (
          <div className="photo-wrapper" key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={`Random image ${index + 1}`}
                className={grayscale ? "grayscale" : ""}
              />
              <div className="photo-caption">
                {image.author && (
                  <div className="photo-author">{image.author}</div>
                )}
                {image.src && (
                  <div className="photo-url">
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {image.link}
                    </a>
                  </div>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>

      
      {onAddMore && (
        <div className="add-more-container">
          <button onClick={onAddMore} className="add-more-btn">
            Add More
          </button>
        </div>
      )}
    </div>
  );
}
