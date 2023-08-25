import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
function MainLayout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default MainLayout;
