import Button from "../UI/Button/Button";

const Header = ({ photosArray, setPhotosArray }) => {
  const handleClick = () => {
    setPhotosArray(photosArray.slice(0, 4));
  };

  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "750px",
      }}
    >
      <h1 style={{ fontFamily: "sans-serif", fontWeight: 400 }}>
        Photo Fetcher
      </h1>
      <nav>
        <Button
          onClick={handleClick}
          style={{
            display: "flex",
            position: "relative",
            right: "-73%",
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
