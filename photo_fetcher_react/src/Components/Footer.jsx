import React from "react";
import '../css/app.css';
import dummyData from "../Store/DummyData";

function Footer({setImages}) {

  function fetchMoreImages( numberOfImages, dummyData ){
    const randomImages = []
    let i = 0;
    while (i<numberOfImages) {
      randomImages[i] = dummyData[Math.floor(Math.random() * 12)];
      i+=1;
    }
    setImages(prevImages => [...prevImages, ...randomImages]);
  }

    return (
        <footer>
            <button onClick={()=>fetchMoreImages(4, dummyData)} className='btn stretch'> More Photos </button>
        </footer>
    );
}

export default Footer;