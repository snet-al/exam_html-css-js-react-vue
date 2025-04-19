import React, { createContext, useState } from "react";

const GrayscaleContext = createContext();

export const GrayscaleProvider = ({ children }) => {
  const [grayscale, setGrayscale] = useState(false);
  const [isChecked, setIsChecked] = useState(grayscale);

  return (
    <GrayscaleContext.Provider
      value={{ grayscale, setGrayscale, isChecked, setIsChecked }}
    >
      {children}
    </GrayscaleContext.Provider>
  );
};

export default GrayscaleContext;
