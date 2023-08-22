import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import ImageGalleryPage from "./pages/ImageGalleryPage/ImageGalleryPage";

function App() {
    return (
        <Layout
            header = {<Header/>}
            imageGallery = {<ImageGalleryPage/>}
        />
    );
}

export default App;


