import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ImageGalleryPage from "./pages/ImageGalleryPage/ImageGalleryPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<ImageGalleryPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

