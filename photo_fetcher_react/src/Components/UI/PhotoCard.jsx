import React from "react";
import '../../css/app.css';

function PhotoCard({ photo, loading, grayscale }) {
    if (loading && photo.placeholder)
        return (
            <article className="photo-item">
                <span className="placeholder" />
            </article>
        );

    return (
        <article className="photo-item">
            <img className={grayscale ? 'grayscale' : ''} src={photo.download_url} alt={photo.author} loading="lazy" id={photo.id} />
            <figcaption style={{ display: 'block' }}>
                <h3> {photo.author} </h3>
                <a href={photo.url} target="_blank"> {photo.url} </a>
            </figcaption>
        </article>
    );
}

export default PhotoCard;