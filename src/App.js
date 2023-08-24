import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Title from "./components/UI/Title/Title";
import Header from "./components/Header/Header";
import ImageGalleryPage from "./pages/ImageGalleryPage/ImageGalleryPage";

function App() {
    return (
        <Layout
            title = {<Title/>}
            header = {<Header/>}
            imageGallery = {<ImageGalleryPage/>}
        />
    );
}

export default App;


