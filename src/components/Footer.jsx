import React from "react";
import Button from "./UI/Button";

const Footer = ({ onLoadMore, loading }) => {
    return (
        <footer className="app-footer">
            <Button 
                text={loading ? "Loading..." : "Load More Images"} 
                className="load-more-btn" 
                onClick={onLoadMore}
                disabled={loading}
            />
        </footer>
    );
}

export default Footer;