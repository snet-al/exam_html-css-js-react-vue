import React from "react";
import dataDummy from "../../store/DummyData/Data";

const ImageItem = () => {
    return (
        <div className="container">
            {dataDummy.map((data, index) => (
                <figure className="section-item" key={data.id}>
                    <img src={data.image} alt={`Image by ${data.name}`} />
                    <figcaption className="image-information">{data.name}</figcaption>
                    <a className="image-url" href={data.link}>
                        {data.link}
                    </a>
                </figure>
            ))}
        </div>
    );
};

export default ImageItem;
