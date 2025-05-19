import React from "react";
import '../css/app.css';

function Footer({ setImages, setLoading, loading }) {

    const fetchMorePhotos = async (numberOfImages) => {
        setLoading(true);
        setImages(prevImages => [...prevImages, ...Array.from({ length: numberOfImages }, () => ({ img_loading: true }))]);
        try {
            const response = await fetch(
                `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100) + 1}&limit=${numberOfImages}`
            );
            if (!response.ok) throw new Error(`Error Status: ${response.status}`);

            const photos = await response.json();

            setImages(prevImages => [...prevImages.slice(0,(-1 * numberOfImages)), ...photos]);

        } catch (error) {
            console.error("Error fetching photos:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer>
            <button onClick={()=>fetchMorePhotos(4)} disabled={loading} className='btn stretch'> More Photos </button>
        </footer>
    );

}

export default Footer;