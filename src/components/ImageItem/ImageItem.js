import React from "react";
import image1 from "../../assets/images/image1.jpg";

const ImageItem = () => {
    const author = "Lukas Budimaier";
    const url = "https://unsplash.com/photos/pwaaqfoMibl";

    return (
        <figure className="section-item">
            <img src={image1} alt="Image by {author}" />
            <figcaption className="image-information">{author}</figcaption>
            <a className="image-url" href={url}>
                {url}
            </a>
        </figure>
    );
};

export default ImageItem;
