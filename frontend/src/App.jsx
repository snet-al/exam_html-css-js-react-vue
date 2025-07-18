import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { useState, createContext } from "react";

export const GrayscaleContext = createContext();

function App() {
  const [isGrayscale, setIsGrayscale] = useState(false);

  const handleToggle = () => {
    setIsGrayscale(!isGrayscale);
  };

  return (
    <GrayscaleContext.Provider value={{ isGrayscale, handleToggle }}>
      <Layout>
        <Home />
      </Layout>
    </GrayscaleContext.Provider>
  );
}

export default App;
