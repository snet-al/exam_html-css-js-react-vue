import Switch from "../Switch/Switch";
import Button from "../UI/Button/Button";
import useGrayscale from "../context/hooks/useGrayscale";

const Header = ({ photosArray, setPhotosArray }) => {
  const { setGrayscale, setIsChecked } = useGrayscale();

  const handleClick = () => {
    setPhotosArray(photosArray.slice(0, 4));
  };

  const switchChangeHandler = () => {
    setIsChecked((prevState) => {
      const newState = !prevState;
      setGrayscale(newState);
      return newState;
    });
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
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Switch label="Make photos grayscale" onChange={switchChangeHandler} />
        <Button
          onClick={handleClick}
          style={{
            display: "flex",
            position: "relative",
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
