import React from "react";
import Button from "./UI/Button";

const Footer = ({ onLoadMore }) => {
    return (
        <footer>
            <Button text="More Photos" className="load-more" onClick={onLoadMore} />
        </footer>
    );
}

export default Footer;