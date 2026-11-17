import React from "react";
import "./style.css";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import { PhotoProvider } from "./store/PhotoContext";

function App() {
  return (
    <PhotoProvider>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </PhotoProvider>
  );
}

export default App;