import React from "react";
import "../../App.css";
import dataDummy  from "../../STORE/data";

const ImagePicker = () => {
  return (
    <div>
      <div className="container">
        {dataDummy .map((data, index) => (
          <div className="column" >
            <img src={data.image} />
            <div className="image-information">
              <p className="author-name">{data.name}</p>
              <a className="image-url" href={data.link}>
                {data.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePicker;
