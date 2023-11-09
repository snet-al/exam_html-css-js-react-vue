import React from "react";
import Header from "../components/Header";
import GalleryPage from "../pages/GalleryPage";

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
