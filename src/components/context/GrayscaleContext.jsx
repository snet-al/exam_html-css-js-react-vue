import React, { createContext, useState } from "react";

const GrayscaleContext = createContext();

export const GrayscaleProvider = ({ children }) => {
  const [grayscale, setGrayscale] = useState(false);

  return (
    <GrayscaleContext.Provider value={{ grayscale, setGrayscale }}>
      {children}
    </GrayscaleContext.Provider>
  );
};

export default GrayscaleContext;
