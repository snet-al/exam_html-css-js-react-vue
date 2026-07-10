import React from "react";


function Photocard({ Photo }) {
    return (
        <div className="photocard">
            <img src={Photo.download_url} alt={`Photo by ${Photo.author}`} />
            <p>{Photo.author}</p>
        </div>
    );
}

export default Photocard;