import dummyData from "../store/photos";
import "./style.css";
const Home = () => {
  return (
    <>
      <main>
        <section>
          <h1>Photo Gallery</h1>
          <div className="grid">
            {dummyData.map((photo) => (
              <div key={photo.id} className="photo-card">
                <img src={photo.url} alt={photo.title} />
                <h3>{photo.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
