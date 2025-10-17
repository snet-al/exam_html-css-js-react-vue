export default function Card({ src, name, link }) {
  return (
    <figure className="card">
      <img src={src} alt="Photo" />
      <figcaption>
        <span className="name">{name}</span>
        <a className="link" href={link}>
          {link}
        </a>
      </figcaption>
    </figure>
  );
}
