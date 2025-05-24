import React from "react";
import '../css/app.css';

function Footer({ loadPhotos, loading }) {
    return (
        <footer>
            <button onClick={loadPhotos} disabled={loading} className='btn stretch'> More Photos </button>
        </footer>
    );
}

export default Footer;