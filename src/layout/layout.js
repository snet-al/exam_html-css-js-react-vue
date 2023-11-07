import React from "react";
import Header from "../components/Header";

function layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default layout;
