import React from "react";
import "./ImageContainer.css"

const ImageContainer = ({ src, alt, photographer = "Anonymous Photographer", onClick }) => {
    return (
        <figure className="image-container" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <img src={src} alt={alt} />
            <figcaption className="image-overlay">
                <p>{photographer}</p>
                <a href="https://picsum.photos" target="_blank" rel="noopener noreferrer">
                    via Picsum Photos
                </a>
            </figcaption>
        </figure>
    );
};

export default ImageContainer;