import Gallery from "../components/Gallery";
import MainLayout from "../layout/MainLayout";
import dummyData from "../store/dummyData"; 
import "../App.css";

function HomePage() {
  return (
    <MainLayout>
      <Gallery photos={dummyData}/>
    </MainLayout>
  );
}

export default HomePage;