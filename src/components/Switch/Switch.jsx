const Switch = ({ label, checked, onChange }) => {
  return (
    <label
      style={{
        display: "flex",
        position: "static",
        width: "50%",
        alignItems: "center",
        cursor: "pointer",
        fontFamily: "sans-serif",
        fontWeight: 400,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ display: "none" }}
      />
      <span
        style={{
          width: "60px",
          height: "30px",
          backgroundColor: checked ? "#5c2bdb" : "#ccc",
          borderRadius: "15px",
          position: "relative",
          transition: "background-color 0.3s ease",
          marginRight: "10px",
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
            left: checked ? "32px" : "2px",
            transition: "left 0.3s ease",
          }}
        ></span>
      </span>
      {label}
    </label>
  );
};
export default Switch;
