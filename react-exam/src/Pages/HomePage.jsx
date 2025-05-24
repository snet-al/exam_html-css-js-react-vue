import "./HomePage.css";
import GrayscaleToggle from '../Components/UI/GrayScaleToggle.jsx';
import FetchButton from '../Components/UI/FetchButton.jsx';
import PhotoGrid from '../Components/PhotoGrid.jsx';
import { useState } from "react";

function HomePage() {

    const [isToggled, setIsToggled] = useState(false)

    function handleClick(){
        setIsToggled((prevtoggle) => !prevtoggle)
    }

  return (
    <>
      <section className="controls">

        <GrayscaleToggle onToggle={handleClick}/>
        <span>Make photos grayscale</span>
        <FetchButton/>
        
      </section>

      <PhotoGrid grayscale={isToggled}/>
    </>
  );
};

export default HomePage