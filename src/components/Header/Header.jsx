import Button from "../UI/Button/Button";

const Header = ({ photosArray, setPhotosArray }) => {
  const handleClick = () => {
    setPhotosArray(photosArray.slice(0, 4));
  };

  return (
    <header>
      <h1>Photo Fetcher</h1>
      <nav>
        <Button
          onClick={handleClick}
          style={{
            display: "flex",
            position: "relative",
            right: "-80%",
            width: "200px",
            alignItems: "center",
            justifyContent: "center",
            background: "#5c2bdb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          label={"Fetch new Photos"}
        />
      </nav>
    </header>
  );
};

export default Header;
