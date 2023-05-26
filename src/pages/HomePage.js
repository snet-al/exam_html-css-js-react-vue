import React from 'react';
import './HomePage.css';
import Header from '../components/Header/Header';
import PhotoGrid from '../components/PhotoGrid/PhotoGrid';

function HomePage() {
  const handleToggle = () => {};
  const handleFetch = () => {};

  return (
    <div className="main">
      <Header handleToggle={handleToggle} handleFetch={handleFetch} />
      <section className="grid-container">
        <PhotoGrid
          imageUrl="https://fastly.picsum.photos/id/49/200/200.jpg?hmac=w2wY6ewoLUCpaqq77gzCIdeKq2xKmTkssFtL_4K34H0"
          title="Lukas Budimaier"
          url="https://unsplash.com/photos/pwaaqfoMibi"
        />
        <PhotoGrid
          imageUrl="https://fastly.picsum.photos/id/455/200/200.jpg?hmac=YZhCbBjCYF0ha5dR9ElToDVwWcw05w0e4pAv5S9nZYg"
          title="Lukas Budimaier"
          url="https://unsplash.com/photos/pwaaqfoMibi"
        />
        <PhotoGrid
          imageUrl="https://fastly.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE"
          title="Lukas Budimaier"
          url="https://unsplash.com/photos/pwaaqfoMibi"
        />
        <PhotoGrid
          imageUrl="https://fastly.picsum.photos/id/499/200/200.jpg?hmac=6OuceXs-LrhY-PtwyqBs_bARD8YWZEj9XuZ_ZY894Wc"
          title="Lukas Budimaier"
          url="https://unsplash.com/photos/pwaaqfoMibi"
        />
      </section>
    </div>
  );
}

export default HomePage;
