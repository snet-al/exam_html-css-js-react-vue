import Navigation from "../Navigation/Navigation";
import Title from "../UI/Title/Title";

const Header = () => {
  return (
    <header>
      <Title>{"Photo Fetcher"}</Title>
      <Navigation className={"main-header"} />
    </header>
  );
};

export default Header;
