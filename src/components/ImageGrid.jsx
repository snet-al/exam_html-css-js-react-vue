import { ImageContainer } from "./ui/ImageContainer";

export function ImageGrid() {
  return (
    <section className="image-grid">
      <ImageContainer
        src={"https://picsum.photos/367/275"}
        href={"#"}
        author={"Sildi"}
      />
      <ImageContainer
        src={"https://picsum.photos/367/275"}
        href={"#"}
        author={"Sildi"}
      />
      <ImageContainer
        src={"https://picsum.photos/367/275"}
        href={"#"}
        author={"Sildi"}
      />
      <ImageContainer
        src={"https://picsum.photos/367/275"}
        href={"#"}
        author={"Sildi"}
      />
    </section>
  );
}
