import React from "react";
import Photocard from "../Photocard"; // Go up one folder to find Photocard
import Skeletons from "./Skeletons";   // Look in the same UI folder

const photoCount = 4;

function Grid({ photos, loading, grayscale }) {
    return (
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
