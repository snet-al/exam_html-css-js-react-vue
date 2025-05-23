import React from "react";
import '../css/app.css';

function Footer({ loadMore, loading }) {
    return (
        <footer>
            <button onClick={loadMore} disabled={loading} className='btn stretch'> More Photos </button>
        </footer>
    );
}

export default Footer;