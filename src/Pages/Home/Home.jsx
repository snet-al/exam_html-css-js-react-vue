import { useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import useGrayscale from "../../components/context/hooks/useGrayscale";
import dummyData from "../../Store/dummyData";

const Home = ({ photosArray, setPhotosArray }) => {
  const { grayscale } = useGrayscale();
  const getRandomElements = (array, num) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const handleOnClick = () => {
    const fetchData = async () => {
      const newPhotos = await dummyData();
      const randomPhotos = getRandomElements(newPhotos, 4);
      setPhotosArray((prevPhotos) => [...prevPhotos, ...randomPhotos]);
    };
    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const photosArray = await dummyData();
      setPhotosArray(getRandomElements(photosArray, 4));
    };
    fetchData();
  }, [setPhotosArray]);

  return (
    <section style={{ width: "750px" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexFlow: "wrap",
          gap: "10px",
          paddingTop: 20,
          paddingBottom: 20,
        }}
        className="container"
      >
        {photosArray.map((photo) => (
          <Card
            url={photo.download_url}
            author={photo.author}
            style={{
              width: "49%",
              height: "300px",
              overflow: "hidden",
              filter: grayscale ? "grayscale(100%)" : "none",
            }}
            key={photo.id}
          />
        ))}
      </div>
      <Button
        onClick={handleOnClick}
        style={{
          width: "100%",
          background: "#5c2bdb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        label={"More Photos"}
      />
    </section>
  );
};

export default Home;
