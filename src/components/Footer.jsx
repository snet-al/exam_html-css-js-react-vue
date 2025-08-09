import React from "react";

const Footer = ({ handleLoadMore, loading }) => {
    return (
        <footer className="appFooter">
            <button 
                className="loadMoreBtn" 
                onClick={handleLoadMore}
                disabled={loading}
            >
                {loading ? "Loading..." : "Load More Images"}
            </button>
        </footer>
    );
}

export default Footer;