import React from "react";
import DisplayImage from "./DisplayImage";
import LoadMorePhotos from "..LoadMorePhotoos";
import "../index.css";

function mainPage() {
  return (
    <div>
      <DisplayImage />
      <LoadMorePhotos />
    </div>
  );
}

export default mainPage;
