import React from "react";
import Toggle from "./UI/Toggle.jsx"
import '../css/app.css';
import dummyData from "../Store/DummyData.jsx";

function NavBar({ setImages, grayscale, setGrayscale }) {

  function fetchRandomNewImages( numberOfImages, dummyData ){
    const randomImages = []
    let i = 0;
    while (i<numberOfImages) {
      randomImages[i] = dummyData[Math.floor(Math.random() * 12)];
      i+=1;
    }
    setImages(randomImages);
  }

    return (
        <nav>
            <Toggle toggleLabel="Make photos grayscale" grayscale={grayscale} setGrayscale={setGrayscale}/>
            <button onClick={()=>fetchRandomNewImages(4, dummyData)} className='btn'> Fetch New Photos </button>
        </nav>
    );
}

export default NavBar;