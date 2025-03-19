import React from "react";
import "./HomePage.css";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import dummyData from "../store/dummyData";

function HomePage() {
    return (
        <section className="image-grid">
            {dummyData.map((image) => (
                <figure key={image.id}>
                    <ImageContainer src={image.src} alt={image.alt} />
                </figure>
            ))}
        </section>
    );
}

export default HomePage;