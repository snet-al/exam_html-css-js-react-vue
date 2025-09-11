import { Toolbar } from "../components/Toolbar";
import { ImageGrid } from "../components/ImageGrid";

export function HomePage() {
  return (
    <div className="home-page">
      <Toolbar />
      <ImageGrid />
      <button className="more-photos-button">More Photos</button>
    </div>
  );
}
