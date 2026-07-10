import React from "react";

const photoCount = 4;

function getPhotos(count){
    const photos = [];
    for (let i = 0; i < count; i++) {
        photos.push(`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`);
    }
    return photos;
}

//fetch function to be implemtented to fetch photos from picsum.photos API

function Photocard({ Photo }) {
    return (
        <div className="photocard">
            <img src={Photo.download_url} alt={`Photo by ${Photo.author}`} />
            <p>{Photo.author}</p>
        </div>
    );
}

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

function Skeletons({ count }) {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div key={index} className="skeleton"></div>
  ));

    return <div className="skeletons">{skeletons}</div>;
}

export default Skeletons;

