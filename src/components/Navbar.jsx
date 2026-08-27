import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <h2>PhotoFetcher</h2>
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/favorites ">Favorites</Link>
            </div>
        </nav>
    )
}

export default Navbar
