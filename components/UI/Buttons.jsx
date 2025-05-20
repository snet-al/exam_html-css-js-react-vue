import "../../generalstyles.css";
import "./buttons.css";

export default function Buttons({ grayscale, setGrayscale, onFetchNew }) {
  const handleGrayscaleToggle = () => {
    setGrayscale((prev) => !prev);
  };

  return (
    <div id="buttons-flex">
      <button 
        onClick={handleGrayscaleToggle} 
        className={`greyscale-button ${grayscale ? "on" : "off"}`}
      >
        <div className={grayscale ? "x-remove" : "x"}>✕</div>
      </button>

      <p>Make photos greyscale</p>

      <button onClick={onFetchNew}>
        Fetch new photos
      </button>
    </div>
  );
}
