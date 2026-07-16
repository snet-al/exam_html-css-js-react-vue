import Toggle from "./UI/Toggle";
import Button from "./UI/Button";

function Header({ onFetchNew, grayscale, onToggle }) {
  return (
    <header className="header container">
      <h1>Photo Fetcher</h1>
      <div className="toolbar">
        <Toggle checked={grayscale} onChange={onToggle} />
        <Button onClick={onFetchNew}>Fetch New Photos</Button>
      </div>
    </header>
  );
}

export default Header;