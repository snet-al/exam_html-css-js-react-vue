import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";

function MainLayout({ children, fetchNewImages , onChangeToggle , handleMorePhotosClick}) {
  return (
    <>
      <Header fetchNewImages={fetchNewImages}  onChangeToggle={onChangeToggle} />
      <main>{children}</main>
      <Button morePhotosBtn="More Photos" onClick={handleMorePhotosClick}/>
    </>
  );
}

export default MainLayout;