import React from "react";
import "../../App.css";

function Layout(props) {
  return (
      <>
          {props.header}
          {props.imageGallery}
      </>
  );
}

export default Layout;
