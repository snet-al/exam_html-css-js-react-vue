import React from "react";
import Header from "../../components/Header/Header";

const DefaultLayout = ({ children, toggleGrayscale, handleFetchClick }) => {
  return (
    <div>
      <Header
        toggleGrayscale={toggleGrayscale}
        handleFetchClick={handleFetchClick}
      />
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
