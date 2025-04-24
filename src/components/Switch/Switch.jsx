import useGrayscale from "../context/hooks/useGrayscale";

const Switch = ({ label, onClick }) => {
  const { isChecked } = useGrayscale();
  return (
    <label
      style={{
        display: "flex",
        position: "static",
        width: "50%",
        alignItems: "center",
        fontFamily: "sans-serif",
        fontWeight: 400,
      }}
    >
      <input type="checkbox" style={{ display: "none" }} />
      <span
        onClick={onClick}
        style={{
          width: "60px",
          height: "30px",
          backgroundColor: isChecked ? "#5c2bdb" : "#ccc",
          borderRadius: "15px",
          position: "relative",
          transition: "background-color 0.3s ease",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            width: "26px",
            height: "26px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            position: "absolute",
            top: "2px",
            left: isChecked ? "32px" : "2px",
            transition: "left 0.3s ease",
          }}
        ></span>
      </span>
      {label}
    </label>
  );
};
export default Switch;
