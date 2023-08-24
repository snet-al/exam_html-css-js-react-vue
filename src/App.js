import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ImageGalleryPage from "./pages/ImageGalleryPage/ImageGalleryPage";

function App() {
  return (
    <section className="App">
      <Layout>
        <ImageGalleryPage />
      </Layout>
    </section>
  );
}

export default App;
