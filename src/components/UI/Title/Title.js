import React from "react";
import "../../../App.css";

const Title = (props) => {
    return (
      <section className="title">
          {props.title}
      </section>
    );
};

export default Title;