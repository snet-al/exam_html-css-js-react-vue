import "./HomePage.css";
import GrayscaleToggle from '../Components/UI/GrayScaleToggle.jsx';
import FetchButton from '../Components/UI/FetchButton.jsx';
import PhotoGrid from '../Components/PhotoGrid.jsx';

function HomePage() {
  return (
    <>
      <section className="controls">
        <GrayscaleToggle/>
        <span>Make photos grayscale</span>
        <FetchButton/>
      </section>

      <PhotoGrid/>
    </>
  );
};

export default HomePage