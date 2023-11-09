import React from "react";

const ImageItem = ({ data }) => {
    return (
        <figure className="section-item" key={data.id}>
            <img src={data.image} alt={`Image by ${data.name}`} />
            <figcaption className="image-information">{data.name}</figcaption>
            <a className="image-url" href={data.link}>
                {data.link}
            </a>
        </figure>
    );
};

export default ImageItem;
