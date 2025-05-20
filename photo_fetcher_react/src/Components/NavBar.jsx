import React from "react";
import Toggle from "./UI/Toggle.jsx"
import '../css/app.css';
import { fetchPhotos } from "../Services/Api.js";

function NavBar({ setImages, setLoading, loading, grayscale, setGrayscale }) {
    return (
        <nav>
            <Toggle toggleLabel="Make photos grayscale" grayscale={grayscale} setGrayscale={setGrayscale} />
            <button onClick={() => fetchPhotos(4, setImages, setLoading)} disabled={loading} className='btn'> Fetch New Photos </button>
        </nav>
    );
}

export default NavBar;