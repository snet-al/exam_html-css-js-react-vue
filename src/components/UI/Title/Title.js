import React from "react";
import "../../../App.css";

const Title = (props) => {
    return (
      <header className="title">
          {props.title}
      </header>
    );
};

export default Title;