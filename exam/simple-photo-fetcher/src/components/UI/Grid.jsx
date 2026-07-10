import React from "react";
import Photocard from "../Photocard"; 
import Skeletons from "./Skeletons";   

const photoCount = 4;

function Grid({ photos, loading, grayscale }) {
    return (
        // Apply grayscale class conditionally 
        <div className={`grid ${grayscale ? "grayscale" : ""}`}>
            {loading ? (
                <Skeletons count={photoCount} />
            ) : (
                photos.map((photo, index) => (
                    <Photocard key={index} Photo={{ download_url: photo, author: `Author ${index + 1}` }} />
                ))
            )}
        </div>
    );
}

export default Grid;
