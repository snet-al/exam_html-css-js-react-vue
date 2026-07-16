import React from "react";
import Skeletons from "./Skeletons.jsx";   
import Photocard from "../Photocard.jsx";

const photoCount = 4;

function Grid({ photos, loading, grayscale }) {
    return (
        <div className="container">
            <div className={`grid ${grayscale ? "grayscale" : ""}`}>
                {loading ? (
                    <Skeletons count={photoCount} />
                ) : (
                    photos.map((photo, index) => (
                     
                        <Photocard key={index} Photo={photo} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Grid;

