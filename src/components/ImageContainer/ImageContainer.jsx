import React from "react";
import "./ImageContainer.css"

const ImageContainer = ({ src, alt, isGrayscale }) => {
    return (
        <figure className="image-container">
            <img src={src} alt={alt} style={{ filter: isGrayscale ? "grayscale(100%)" : "none" }} />
            <figcaption className="overlay">
                <p>Lukas Budimaier</p>
                <a href="https://picsum.photos" target="_blank" rel="noopener noreferrer">
                    https://picsum.photos
                </a>
            </figcaption>
        </figure>
    );
};

export default ImageContainer;