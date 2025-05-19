import React from "react";
import '../css/app.css';
import PhotoCard from './UI/PhotoCard.jsx'

function PhotoGallery({ images, loading, grayscale }) {
    return (
        <section className="photo-gallery ">
            {images.map((img, index) => (
                <PhotoCard loading={loading} photo={img} key={img.id || index} grayscale={grayscale}/>
            ))}
        </section>
    );
}

export default PhotoGallery;