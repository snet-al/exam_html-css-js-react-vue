import React, { useEffect, useState } from "react";
import "./Main.css";
import Figure from "../Figure/Figure";
// import data from "../../store/DummyData.json";

function Main() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        const data = await response.json();
        const randomItems = getRandomItems(data, 4);

        setAuthors(randomItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);
  const getRandomItems = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <section className="body-section">
      {authors?.map((authors) => (
        <Figure
          key={authors.id}
          id={authors.id}
          image={authors.download_url}
          href={authors.href}
          author={authors.author}
        />
      ))}
    </section>
  );
}

export default Main;
