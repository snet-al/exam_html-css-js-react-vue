import { useEffect } from "react";
import getImages from "../helpers/getImage";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const Home = ({ photosArray, setPhotosArray }) => {
  const getRandomElements = (array, num) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const handleOnClick = () => {
    const fetchData = async () => {
      const newPhotos = await getImages();
      const randomPhotos = getRandomElements(newPhotos, 4);
      setPhotosArray((prevPhotos) => [...prevPhotos, ...randomPhotos]);
    };
    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const photosArray = await getImages();
      setPhotosArray(getRandomElements(photosArray, 4));
    };
    fetchData();
  }, [setPhotosArray]);

  if (photosArray.length === 0) {
    return (
      <section style={{ width: "750px" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            flexFlow: "wrap",
            gap: "10px",
            paddingTop: 30,
            paddingBottom: 30,
          }}
          className="container"
        >
          {photosArray.map((photo) => (
            <Card
              style={{
                width: "49%",
                height: "300px",
                overflow: "hidden",
                backgroundColor: "gray",
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
  }

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
