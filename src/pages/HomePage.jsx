import React, { useState } from "react";
import "../style.css";
import Header from "../components/UI/Header";
import PhotoCard from "../components/UI/PhotoCard";
import SkeletonCard from "../components/UI/SkeletonCard";

const HomePage = () => {
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [loading] = useState(false);

  return (
    <main className="container">
      <h2>Photo Fetcher</h2>
      <Header
        isGrayscale={isGrayscale}
        setIsGrayscale={setIsGrayscale}
        FetchNew={() => {}}
      />

      {loading && <SkeletonCard />}

      <section className="gallery">
        <PhotoCard
          imgSrc="https://picsum.photos/id/12/800/600"
          imgAlt="Photo 1"
          authorName="Lukas Budimaier"
          authorLink="https://unsplash.com/photos/pwaaqfoMibl"
          isGrayscale={isGrayscale}
        />
        <PhotoCard
          imgSrc="https://picsum.photos/id/25/800/600"
          imgAlt="Photo 2"
          authorName="Lukas Budimaier"
          authorLink="https://unsplash.com/photos/pwaaqfoMibl"
          isGrayscale={isGrayscale}
        />
        <PhotoCard
          imgSrc="https://picsum.photos/id/28/800/600"
          imgAlt="Photo 3"
          authorName="Lukas Budimaier"
          authorLink="https://unsplash.com/photos/pwaaqfoMibl"
          isGrayscale={isGrayscale}
        />
        <PhotoCard
          imgSrc="https://picsum.photos/id/29/800/600"
          imgAlt="Photo 4"
          authorName="Lukas Budimaier"
          authorLink="https://unsplash.com/photos/pwaaqfoMibl"
          isGrayscale={isGrayscale}
        />
      </section>

      <div className="more-photos">
        <button className="fetch-btn">More Photos</button>
      </div>
    </main>
  );
}

export default HomePage;