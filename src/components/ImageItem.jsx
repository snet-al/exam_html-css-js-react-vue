import React from "react";

const ImageItem = () => {
const author = "Lukas Budimaier";
const url = "https://unsplash.com/photos/pwaaqfoMibl";

    return (
        <figure className="section-item">
            <img src="./image/task2.jpg" alt="" />
            <figcaption>
                <p>{author}</p>
                <p><a href={url}>{url}</a></p>
            </figcaption>
        </figure>
    );
};

export default ImageItem;
