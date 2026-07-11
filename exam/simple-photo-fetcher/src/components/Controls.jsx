import React from "react";
import Button from "./UI/Button";
import Toggle from "./UI/Toggle";


function Controls({ grayscale, setGrayscale, onRefresh }) {
  return (
    <div className="controls">
      <Toggle grayscale={grayscale} setGrayscale={setGrayscale} />
      <Button onClick={onRefresh}>Refresh</Button>
    </div>
  );
}

export default Controls;
