import React from "react";


function Photocard({ Photo }) {
    return (
        <div className="photo-card">
            <img src={Photo.download_url} alt={`Photo by ${Photo.author}`} />
            <div className="photo-info">
                <p className="photo-author">{Photo.author}</p>
                <p className="photo-url">{Photo.download_url}</p>
            </div>
        </div>
    );
}

export default Photocard;
