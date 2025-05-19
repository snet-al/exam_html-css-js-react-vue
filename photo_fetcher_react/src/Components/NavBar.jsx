import React from "react";
import Toggle from "./UI/Toggle.jsx"
import '../css/app.css';

function NavBar({ setImages, setLoading, loading, grayscale, setGrayscale }) {
    const fetchNewPhotos = async (numberOfImages) => {
        setLoading(true);

        setImages(Array.from({ length: numberOfImages }, () => ({ img_loading: true })));

        try {
            const response = await fetch(
                `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100) + 1}&limit=${numberOfImages}`
            );
            if (!response.ok) throw new Error(`Error Status: ${response.status}`);

            const photos = await response.json();

            setImages(photos);

        } catch (error) {
            console.error("Error fetching photos:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <nav>
            <Toggle toggleLabel="Make photos grayscale" grayscale={grayscale} setGrayscale={setGrayscale}/>
            <button onClick={()=>fetchNewPhotos(4)} disabled={loading} className='btn'> Fetch New Photos </button>
        </nav>
    );
}

export default NavBar;