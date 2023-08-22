import React from "react";
import './App.css';
import ImageGalleryPage from "./components/ImageGalleryPage/ImageGalleryPage";
import Homepage from "./PAGES/Homepage";

function App() {
    return (
        <div className="App">
            <ImageGalleryPage/>
            <Homepage/>
        </div>
    );
}

export default App;

