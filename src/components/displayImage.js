import React from "react";
import "../index.css";

function DisplayImage() {
  return (
    <section className="photo-grid">
      <article className="photo">
        <img
          src="https://i.pinimg.com/originals/9f/97/3e/9f973e009130703da32c1527c3696b65.jpg"
          alt="Photo 1"
        />
      </article>
      <article className="photo">
        <img
          src="https://c.wallhere.com/photos/a2/c6/stritervill_chicago_illinois_usa_city_night_skyscraper_tower-620766.jpg!d"
          alt="Photo 2"
        />
      </article>
      <article className="photo">
        <img
          src="http://zenandtheartoftravel.com/wp-content/uploads/2012/06/DSC_0258.jpg"
          alt="Photo 3"
        />
      </article>
      <article className="photo">
        <img
          src="https://avante.biz/wp-content/uploads/Urban-Sunset-wallpaper/Urban-Sunset-wallpaper29.jpg"
          alt="Photo 4"
        />
      </article>
    </section>
  );
}

export default DisplayImage;
