import React from "react";
import Header from "./components/header";

import DisplayImage from "./components/displayImage";
import FetchPhotos from "./components/ui/ButtonAction";

const images = [
  {
    url: "https://i.pinimg.com/originals/9f/97/3e/9f973e009130703da32c1527c3696b65.jpg",
    caption: "Fig.1, city",
  },
  {
    url: "https://c.wallhere.com/photos/a2/c6/stritervill_chicago_illinois_usa_city_night_skyscraper_tower-620766.jpg!d",
    caption: "Fig.2, city",
  },
  {
    url: "http://zenandtheartoftravel.com/wp-content/uploads/2012/06/DSC_0258.jpg",
    caption: "Fig.3, city",
  },
  {
    url: "https://avante.biz/wp-content/uploads/Urban-Sunset-wallpaper/Urban-Sunset-wallpaper29.jpg",
    caption: "Fig.4, city",
  },
];

function App() {
  const handleLoadMorePhotos = () => {
    console.log("Loading more photos...");
  };

  return (
    <main>
      <Header />
      <DisplayImage images={images} />
      <FetchPhotos onClick={handleLoadMorePhotos} buttonText="LoadMorePhotos" />
    </main>
  );
}

export default App;
