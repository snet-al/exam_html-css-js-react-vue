import React from "react";
import "./Main.css";
import Figure from "../Figure/Figure";
// import data from "../../store/DummyData.json";

function Main({authors}) {
 
  return (
    <section className="body-section">
      {authors?.map((authors) => (
        <Figure
          key={authors.id}
          id={authors.id}
          href={authors.download_url}
          author={authors.author}
        />
      ))}
    </section>
  );
}

export default Main;
