// Footer.jsx
import React from "react";

const Footer = ({ handleLoadMore, loading }) => {
    return (
        <footer className="app-footer">
            <button 
                className="load-more-btn" 
                onClick={handleLoadMore}
                disabled={loading}
            >
                {loading ? "Loading..." : "Load More Images"}
            </button>
        </footer>
    );
}

export default Footer;