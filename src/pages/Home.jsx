import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
  return (
    <div className="app">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;