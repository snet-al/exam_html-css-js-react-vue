import PhotoCard from "./components/PhotoCard"
import GrayScaleBtn from "./components/UI/GrayScaleBtn"
import FetchBtn from "./components/UI/FetchBtn"
import LoadBtn from "./components/UI/LoadBtn"
import "./css/App.css"

function App() {

  return (
    <>
      <section className="buttons">
        <GrayScaleBtn/>
        <FetchBtn/>
      </section>
      <main>
        <PhotoCard/>
        <PhotoCard/>
        <PhotoCard/>
        <PhotoCard/>
      </main>
      <section className="load-more-section">
        <LoadBtn/>
      </section>
    </>
  )
}

export default App
