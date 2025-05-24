import React from "react";
import Header from '../components/Header.jsx';

function Layout({ children }) {
    return (
        <>
            <Header children='Photo Fetcher' />
            {children}
        </>
    );
}

export default Layout;