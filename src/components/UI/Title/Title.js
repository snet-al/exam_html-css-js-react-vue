import React from "react";
import "../../../App.css";

const Title = (props) => {
    return (
        <span className="title">
          {props.title}
      </span>
    );
};

export default Title;