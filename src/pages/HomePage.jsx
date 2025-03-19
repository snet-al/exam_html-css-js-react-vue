import React, { useState, useEffect } from "react";
import "./HomePage.css";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import { fetchPhotos } from "../services/api";
import MainLayout from "../layout/MainLayout";

const HomePage = () => {
    const [photos, setPhotos] = useState([]);
    const [isGrayscale, setIsGrayscale] = useState(false);
    const [page, setPage] = useState(1);

    const getPhotos = async (pageNumber = 1) => {
        try {
            const fetchedPhotos = await fetchPhotos(pageNumber);
            if (pageNumber === 1) {
                setPhotos(fetchedPhotos);
            } else {
                setPhotos((prevPhotos) => [...prevPhotos, ...fetchedPhotos]);
            }
        } catch (error) {
            console.error("Failed to fetch photos:", error);
        }
    };

    const handleToggleGrayscale = (checked) => {
        setIsGrayscale(checked);
    };

    const handleFetchNewPhotos = () => {
        getPhotos(1);
    };

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        getPhotos(nextPage);
    };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <MainLayout
            onToggleHandler={handleToggleGrayscale}
            onFetchNewPhotos={handleFetchNewPhotos}
            onLoadMore={handleLoadMore}
        >
            <section className="image-grid">
                {photos.map((image) => (
                    <ImageContainer key={image.id} src={image.src} alt={image.alt} isGrayscale={isGrayscale} />
                ))}
            </section>
        </MainLayout>
    );
}

export default HomePage;