import React from "react";
import GalleryPage from "./pages/GalleryPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <main>
      <MainLayout>
        <GalleryPage />
      </MainLayout>
    </main>
  );
}

export default App;
