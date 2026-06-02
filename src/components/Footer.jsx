import Button from "./UI/Button";

function Footer({ onLoadMore }) {
  return (
    <footer className="footer container">
      <Button className="full-width" onClick={onLoadMore}>More Photos</Button>
    </footer>
  );
}

export default Footer;