import Card from "./UI/Card";

const photos = [
  {
    id: 1015,
    name: "Lukas Budimaier",
    link: "https://unsplash.com/photos/pwaaqfoMibl",
  },
  {
    id: 1020,
    name: "Lukas Budimaier",
    link: "https://unsplash.com/photos/pwaaqfoMibl",
  },
  {
    id: 1024,
    name: "Lukas Budimaier",
    link: "https://unsplash.com/photos/pwaaqfoMibl",
  },
  {
    id: 1025,
    name: "Lukas Budimaier",
    link: "https://unsplash.com/photos/pwaaqfoMibl",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="grid">
        {photos.map((p) => (
          <Card
            key={p.id}
            src={`https://picsum.photos/id/${p.id}/600/400`}
            name={p.name}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}
