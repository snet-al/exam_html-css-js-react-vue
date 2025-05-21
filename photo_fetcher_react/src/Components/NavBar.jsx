import React from "react";
import Toggle from "./UI/Toggle.jsx"
import '../css/app.css';

function NavBar({ fetchRandomNewImages, dummyData, grayscale, setGrayscale }) {
  return (
    <nav>
      <Toggle grayscale={grayscale} setGrayscale={setGrayscale}>
        "Make photos grayscale"
      </Toggle>
      <button onClick={() => fetchRandomNewImages(4, dummyData)} className='btn'> Fetch New Photos </button>
    </nav>
  );
}

export default NavBar;