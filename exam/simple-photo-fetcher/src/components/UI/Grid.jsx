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

/* 
API Server
    
    Returns JSON text (raw data)
    
photoService.js
    Calls: fetch(url)
    Parses: response.json()
    Returns: Array of 4 photo objects
    
HomePage.jsx
    Receives: data (array from service)
    Calls: setPhotos(data)
    Updates React state: photos = [photo1, photo2, photo3, photo4]
    
HomePage JSX
    Passes: <Grid photos={photos} ... />
    
Grid.jsx
    Receives: photos prop (array)
    Loops: photos.map((photo) => ...)
    For each iteration, passes: <Photocard Photo={photo} />
    
Photocard.jsx (4 instances)
    Instance 1: Receives photo #1 object
    Instance 2: Receives photo #2 object
    Instance 3: Receives photo #3 object
    Instance 4: Receives photo #4 object
    
    Each accesses:
    - Photo.download_url → <img src=... />
    - Photo.author → <p>{author}</p>
    
Browser Displays
    4 Photo Cards with images + author names

*/