import React, { useState, cloneElement  } from "react";
import Header from "../components/Header/Header";

function Layout({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (isChecked) => {
    setIsChecked(isChecked);
  };

  return (
    <>
      <Header onCheckboxChange={handleCheckboxChange} />
      <main>
        {React.Children.map(children, (child) => {
          return cloneElement(child, { isChecked });
        })}
      </main>
    </>
  );
}

export default Layout;
