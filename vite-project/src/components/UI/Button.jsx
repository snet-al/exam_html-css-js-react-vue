export default function Button({ children, onClick, disabled }) {
  return (
    <button className="btn" type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
