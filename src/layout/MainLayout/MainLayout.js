import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";

function MainLayout({ children, fetchNewImages , onChange}) {
  return (
    <>
      <Header fetchNewImages={fetchNewImages}  onChange={onChange} />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
