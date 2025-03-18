import React from "react";
import "./HomePage.css";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import ToggleSwitch from "../components/UI/Toggle/Toggle";
import FetchNewPhotosButton from "../components/UI/NewButton/NewPhotosButton";
import LoadMoreButton from "../components/UI/MoreButton/LoadMoreButton";
import MainLayout from "../layout/MainLayout";

function HomePage() {
    const images = [
        { id: 1, src: "https://picsum.photos/200", alt: "Photo 1" },
        { id: 2, src: "https://picsum.photos/201", alt: "Photo 2" },
        { id: 3, src: "https://picsum.photos/202", alt: "Photo 3" },
        { id: 4, src: "https://picsum.photos/203", alt: "Photo 4" },
    ];

    return (
        <MainLayout>
            <section className="controls">
                <ToggleSwitch />
                <FetchNewPhotosButton />
            </section>
            <section className="image-grid">
                {images.map((image) => (
                    <figure key={image.id} className="image-item">
                        <ImageContainer src={image.src} alt={image.alt} />
                    </figure>
                ))}
            </section>
            <LoadMoreButton />
        </MainLayout>
    );
}

export default HomePage;