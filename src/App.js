import Header from "./components/Header/Header";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

function App() {
  const styles = {
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Header />
      <PhotoGallery />
    </div>
  );
}

export default App;
