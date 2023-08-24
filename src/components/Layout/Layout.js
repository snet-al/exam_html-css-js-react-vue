import React from "react";
import "../../App.css";
import Header from "../Header/Header";
import Title from "../UI/Title/Title";

function Layout(props) {
  return (
    <>
      <Title />
      <Header />
      {props.children}
    </>
  );
}

export default Layout;
