import React from "react";
import '../css/app.css';

function Footer({ fetchMorePhotos, loading }) {

    return (
        <footer>
            <button onClick={()=>fetchMorePhotos(4)} disabled={loading} className='btn stretch'> More Photos </button>
        </footer>
    );

}

export default Footer;