import { useState } from "react";
import Layout from "./Layout/Layout";
import "./App.css";

const App = () => {
  const [photosArray, setPhotosArray] = useState([]);

  return <Layout />;
};

export default App;
