import React from "react";
import "./ImageContainer.css"

const ImageContainer = ({ src, alt }) => {
    return (
        <figure className="image-container">
            <img src={src} alt={alt} />
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