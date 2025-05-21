import React from "react";
import '../css/app.css';

function Footer({fetchMoreImages, dummyData}) {

    return (
        <footer>
            <button onClick={()=>fetchMoreImages(4, dummyData)} className='btn stretch'> More Photos </button>
        </footer>
    );
}

export default Footer;