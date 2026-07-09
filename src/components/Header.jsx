import Toggle from "./UI/Toggle";
import Button from "./UI/Button";

function Header() {
  return (
    <header className="header container">
      <h1>Photo Fetcher</h1>
      <div className="toolbar">
        <Toggle />
        <Button>Fetch New Photos</Button>
      </div>
    </header>
  );
}

export default Header;