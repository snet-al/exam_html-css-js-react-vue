function Button({ label, onClick }) {
    return (
        <button className="fetch-btn" onClick={onClick}>
            {label}
        </button>
    )
}

export default Button