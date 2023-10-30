import React from "react";
import "./Main.css";
import Figure from "../Figure/Figure";

function Main() {
  const authors = [
    {
      id: 1,
      href:
        "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      author: "Paul Jarvis",
    },
    {
      id: 2,
      href:
        "https://images.unsplash.com/1/type-away-numero-dos.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Alejandro Escamilla",
    },
    {
      id: 3,
      href:
        "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
      author: "Alejandro Escamilla",
    },
    {
      id: 4,
      href:
        "https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80",
      author: "Alex Dorohovich",
    },
  ];

  return (
    <main>
      <section className="body-section">
        {authors.map((authors) => (
          <Figure
            key={authors.id}
            id={authors.id}
            href={authors.href}
            author={authors.author}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
