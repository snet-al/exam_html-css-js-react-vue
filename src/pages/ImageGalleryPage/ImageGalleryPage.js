import React from "react";
import "../../App.css";
import ImageItem from "../../components/ImageItem/ImageItem";
import Header from "../../components/Header/Header";

const ImageGalleryPage = () => {
    return (
        <>
            <Header/>
            <section className="second-container">
                <ImageItem/>
                <ImageItem/>
                <ImageItem/>
                <ImageItem/>
            </section>
        </>
    );
};

export default ImageGalleryPage;
