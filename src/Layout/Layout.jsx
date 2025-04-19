import Header from "../components/Header/Header";
import Home from "../Pages/Home/Home";

const Layout = ({ photosArray, setPhotosArray }) => {
  return (
    <>
      <Header photosArray={photosArray} setPhotosArray={setPhotosArray} />
      <Home photosArray={photosArray} setPhotosArray={setPhotosArray} />
    </>
  );
};

export default Layout;
