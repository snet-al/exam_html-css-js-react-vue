import React from "react";
import Toggle from "./UI/Toggle.jsx"
import Button from "./UI/Button.jsx"
import '../css/app.css';

function NavBar({ setImages, setLoading, loading, grayscale, setGrayscale }) {
    const FetchNewPhotos = async () => {
        setLoading(true);

        setImages(Array.from({ length: 4 }, () => ({ placeholder: true })));

        try {
            const response = await fetch(
                `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100) + 1}&limit=4`
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
            <Toggle toggleLabel="Make photos grayscale" grayscale={grayscale} setGrayscale={setGrayscale} />
            <Button label="Fetch New Photos" onClick={FetchNewPhotos} disabled={loading} />
        </nav>
    );
}

export default NavBar;