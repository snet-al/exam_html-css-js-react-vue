import React from "react";

const ImageItem = ({data}) => {

    return (
        <figure className="section-item" key={data.id}>
            <img src={data.image} alt=""/>
            <figcaption className="fig-caption">{data.text}
                <a className= "fig-url" href={data.url} >{data.url}</a>
            </figcaption>
        </figure>
    );
};

export default ImageItem;
