import React, { useState } from "react";
import "./Home.css";
import data from "../Store/MockData.json";
import { useStateValue } from "../Context/StateProvider";

function Home() {
  const [test, setTest] = useState(data);
  const [{ isChecked }] = useStateValue();
  console.log(isChecked);

  return (
    <main>
      <section className="body_section">
        {test.map((item) => (
          <article key={item.id} className="card">
            <img
              src={item.image}
              alt=""
              className={isChecked ? "grayscale" : ""}
            />
            <figcaption className="card_text">
              <p>{item.author}</p>
              <a href="https://picsum.photos/" target="_blank">
                https://picsum.photos/
              </a>
            </figcaption>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Home;
