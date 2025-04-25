const Card = ({ url, author, style }) => (
  <div style={style}>
    <img
      style={{ width: "100%", height: "100%", zIndex: 0 }}
      src={url}
      alt="img"
    />
    <div
      style={{
        position: "relative",
        bottom: "30%",
        left: "0",
        background: "rgba(0, 0, 0, 0.5)",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        fontWeight: "300",
        gap: 0,
        zIndex: "1",
      }}
    >
      <p style={{ color: "#aeabab" }}>{author}</p>
      <a style={{ color: "#aeabab", textDecoration: "none" }} href={url}>
        {url}
      </a>
    </div>
  </div>
);

export default Card;
