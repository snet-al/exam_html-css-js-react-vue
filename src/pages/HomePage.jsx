import React, { useState, useEffect } from "react";
import "./HomePage.css";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import { fetchPhotos } from "../services/api";

const HomePage = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const getPhotos = async () => {
            const fetchedPhotos = await fetchPhotos();
            setPhotos(fetchedPhotos);
        };

        getPhotos();
    }, []);

    return (
        <section className="image-grid">
            {photos.map((image) => (
                <ImageContainer key={image.id} src={image.src} alt={image.alt} />
            ))}
        </section>
    );
}

export default HomePage;