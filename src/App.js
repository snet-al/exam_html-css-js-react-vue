import React from "react";

import Header from "./components/header";
import LoadMorePhotos from "./components/LoadMorePhotos";
import DisplayImage from "./components/displayImage";

function App() {
  return (
    <section>
      <Header />
      {}
      <main>{<DisplayImage />}</main>
      <LoadMorePhotos />
    </section>
  );
}

export default App;
