import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GrayscaleProvider } from "./components/context/GrayscaleContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GrayscaleProvider>
      <App />
    </GrayscaleProvider>
  </StrictMode>
);
