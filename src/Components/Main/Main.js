import React from "react";
import "./Main.css";
import Figure from "../Figure/Figure";
import data from "../../store/DummyData.json";

function Main() {
  return (
    <section className="body-section">
      {data.map((authors) => (
        <Figure
          key={authors.id}
          id={authors.id}
          image={authors.image}
          author={authors.author}
        />
      ))}
    </section>
  );
}

export default Main;
