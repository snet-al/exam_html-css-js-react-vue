import React from "react";
import Header from "../Header/Header";
import "../../App.css";
import ImageItem from "./ImageItem";

const ImageGalleryPage = () => {
    return (
        <>
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
