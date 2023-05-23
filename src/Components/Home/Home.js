import React from "react";
import "./Home.css";
import Figure from "../Figure/Figure";

function Home() {
  const authors = [
    {
      id: 1,
      image:
        "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      author: "Paul Jarvis",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/1/type-away-numero-dos.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Alejandro Escamilla",
    },
    {
      id: 3,
      image:
        "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
      author: "Alejandro Escamilla",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80",
      author: "Alex Dorohovich",
    },
  ];

  return (
    <main>
      <section className="body-section">
        {authors.map((authors) => (
          <Figure
            id={authors.id}
            image={authors.image}
            author={authors.author}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
