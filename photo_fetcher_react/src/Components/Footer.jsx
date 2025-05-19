import React from "react";
import '../css/app.css';
import Button from "./UI/Button.jsx"

function Footer({ setImages, setLoading, loading }) {

    const FetchMorePhotos = async () => {
        setLoading(true);
        setImages(prevImages => [...prevImages, ...Array.from({ length: 4 }, () => ({ placeholder: true }))]);
        try {
            const response = await fetch(
                `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100) + 1}&limit=4`
            );
            if (!response.ok) throw new Error(`Error Status: ${response.status}`);

            const photos = await response.json();

            setImages(prevImages => [...prevImages.slice(0,-4), ...photos]);

        } catch (error) {
            console.error("Error fetching photos:", error);
        } finally {
            setLoading(false);
        }

    };

    return (
        <footer>
            <Button label="More Photos" onClick={FetchMorePhotos} className="btn stretch" disabled={loading}/>
        </footer>
    );

}

export default Footer;