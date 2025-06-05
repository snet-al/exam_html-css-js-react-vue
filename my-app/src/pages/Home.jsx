import "./style.css";
import { fetchPhotos } from "../services/PhotoServices";
import { useEffect, useState } from "react";
const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPhotos();
      setPhotos(data);
       console.log(data);
    };
    fetchData();
  }, []);
 
  
  return (
    <>
      <main>
        <section>
          <h1>Photo Gallery</h1>
          <div className="grid">
            {photos.map((photo) => (
              <div key={photo.id} className="photo-card">
                <img src={photo.download_url} alt={photo.title} />
                <h3>{photo.author}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
