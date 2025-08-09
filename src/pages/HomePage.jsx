import React from "react"; 
import "./HomePage.css";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const galleryImages = [
    { id: 1, src: "https://picsum.photos/320/260", alt: "Gallery Image 1" },
    { id: 2, src: "https://picsum.photos/321/260", alt: "Gallery Image 2" },
    { id: 3, src: "https://picsum.photos/322/260", alt: "Gallery Image 3" },
    { id: 4, src: "https://picsum.photos/323/260", alt: "Gallery Image 4" },
];

function HomePage() {
    return (
        <section className="container">
            <Header />
            <div className="imageGrid">
                {galleryImages.map((image) => ( 
                    <article key={image.id}>
                        <ImageContainer src={image.src} alt={image.alt} photographer="Featured Artist" />
                    </article>
                ))}
            </div>
            <Footer />
        </section>
    );
}

export default HomePage;