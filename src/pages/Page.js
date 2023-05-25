import React from 'react';
import './Page.css';

function Toggle() {
  return (
    <label className="toggle">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
}

function PhotoGrid({ imageUrl, title, url }) {
  return (
    <figure className="grid-item">
      <img src={imageUrl} alt={title} />
      <figcaption className="text">
        <h3>{title}</h3>
        <p>{url}</p>
      </figcaption>
    </figure>
  );
}

function Page() {

  const handleToggle = () => { };
  const handleFetch = () => { };

  return (
    <main>
      <h1>Photo Fetcher</h1>

      <div className="row">
        <Toggle onChange={handleToggle} />
        <h5 className="toggletext">Make photos grayscale</h5>
        <button className="button" onClick={handleFetch}>
          Fetch New Photos
        </button>
      </div>

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
    </main>
  );
}

export default Page;