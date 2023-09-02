import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";

function MainLayout({ children, fetchNewImages , onToggleHandler , morePhotosHandler}) {
  return (
    <>
      <Header fetchNewImages={fetchNewImages}  onToggleHandler={onToggleHandler} />
      <main>{children}</main>
      <Button title="More Photos" onClick={morePhotosHandler}/>
    </>
  );
}
export default MainLayout;