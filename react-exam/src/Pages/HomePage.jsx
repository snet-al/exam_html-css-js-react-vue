import "./HomePage.css";
import Header from '../Components/Header.jsx'
import GrayscaleToggle from '../Components/UI/GrayScaleToggle.jsx';
import FetchButton from '../Components/UI/FetchButton.jsx';
import PhotoGrid from '../Components/PhotoGrid.jsx';
import LoadMore from '../Components/UI/LoadMoreButton.jsx';

function HomePage() {
  return (
    <main className="container">

      <Header />

      <section className="controls">
        <GrayscaleToggle/>
        <span>Make photos grayscale</span>
        <FetchButton/>
      </section>

      <PhotoGrid/>

      <footer>
        <LoadMore/>
      </footer> 

    </main>
  );
};

export default HomePage