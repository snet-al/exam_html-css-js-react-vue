import React from "react";
import Toggle from "./UI/Toggle.jsx"
import '../css/app.css';

function NavBar({ loading, grayscale, setGrayscale, fetchNewPhotos }) {

    return (
        <nav>
            <Toggle grayscale={grayscale} setGrayscale={setGrayscale}>
            Make photos grayscale
            </Toggle>
            <button onClick={()=>fetchNewPhotos(4)} disabled={loading} className='btn'> Fetch New Photos </button>
        </nav>
    );
}

export default NavBar;