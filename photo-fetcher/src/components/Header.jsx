import Controls from "./Controls";

export default function Header({ grayscaleOn, onToggle, onFetch }) {
  return (
    <header className="container header-section">
      <h1>Photo Fetcher</h1>
      <Controls
        grayscaleOn={grayscaleOn}
        onToggle={onToggle}
        onFetch={onFetch}
      />
    </header>
  );
}
