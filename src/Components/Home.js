import React from "react";
import "./Home.css";

function Home() {
  return (
    <main>
      <section className="body_section">
        <article className="card">
          <img
            src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            alt=""
          />
          <figcaption className="card_text">
            <p>Paul Jarvis</p>
            <a href="https://picsum.photos/"> https://picsum.photos/</a>
          </figcaption>
        </article>
        <article className="card">
          <img
            src="https://images.unsplash.com/1/type-away-numero-dos.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <figcaption class="card_text">
            <p>Alejandro Escamilla</p>
            <a href="https://picsum.photos/"> https://picsum.photos/</a>
          </figcaption>
        </article>
        <article className="card">
          <img
            src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
            alt=""
          />
          <figcaption class="card_text">
            <p>Alejandro Escamilla</p>
            <a href="https://picsum.photos/"> https://picsum.photos/</a>
          </figcaption>
        </article>
        <article className="card">
          <img
            src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80"
            alt=""
          />
          <figcaption className="card_text">
            <p>Alex Dorohovich</p>
            <a href="https://picsum.photos/"> https://picsum.photos/</a>
          </figcaption>
        </article>
      </section>
    </main>
  );
}

export default Home;
