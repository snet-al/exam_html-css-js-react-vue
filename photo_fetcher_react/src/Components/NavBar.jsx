import React from "react";
import Toggle from "./UI/Toggle.jsx"
import '../css/app.css';

function NavBar({ loadPhotos, loading, grayscale, setGrayscale }) {
    return (
        <nav>
            <Toggle toggleLabel="Make photos grayscale" grayscale={grayscale} setGrayscale={setGrayscale} />
            <button onClick={loadPhotos} disabled={loading} className='btn'> Fetch New Photos </button>
        </nav>
    );
}

export default NavBar;