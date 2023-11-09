import React from "react";
import Header from "../components/Header";

function MainLayout({ children }) {
  console.log(children);
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
