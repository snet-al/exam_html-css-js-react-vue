import React from "react";
import ImagePicker from "../components/UI/ImagePicker";
import {fetchRandomImages} from "../service/apiService";

const HomePage = () => {
  return (
    <div>
      <ImagePicker fetchImages={fetchRandomImages} />
    </div>
  );
};

export default HomePage;
