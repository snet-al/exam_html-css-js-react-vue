import { ToggleButton } from "./ui/ToggleButton.jsx";

export function Toolbar({ isGrey, setIsGrey, fetchPhotos }) {
  return (
    <section className="toolbar">
      <ToggleButton isGrey={isGrey} setIsGrey={setIsGrey}>
        Make photos greyscale
      </ToggleButton>

      <button className="fetch-button" onClick={fetchPhotos}>
        Fetch New Photos
      </button>
    </section>
  );
}
