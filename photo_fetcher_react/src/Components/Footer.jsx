import React from "react";
import '../css/app.css';
import { fetchMorePhotos } from "../Services/Api";

function Footer({ setImages, setLoading, loading }) {
    return (
        <footer>
            <button onClick={() => fetchMorePhotos(4, setImages, setLoading)} disabled={loading} className='btn stretch'> More Photos </button>
        </footer>
    );
}

export default Footer;