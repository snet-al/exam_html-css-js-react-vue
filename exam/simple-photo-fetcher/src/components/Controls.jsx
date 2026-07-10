import React from "react";

//use button and toggle components to create controls component

function Controls({ grayscale, setGrayscale, onRefresh }) {
  return (
    <div className="controls">
      <Toggle grayscale={grayscale} setGrayscale={setGrayscale} />
      <Button onClick={onRefresh}>Refresh</Button>
    </div>
  );
}

