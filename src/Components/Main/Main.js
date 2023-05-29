import React, { useEffect, useState } from "react";
import "./Main.css";
import Figure from "../Figure/Figure";
import data from "../../store/DummyData.json";

function Main() {
  const [authors, setAuthors] = useState();
  useEffect(() => {
    setAuthors(data);
  }, []);

  return (
    <section className="body-section">
      {authors?.map((authors) => (
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
