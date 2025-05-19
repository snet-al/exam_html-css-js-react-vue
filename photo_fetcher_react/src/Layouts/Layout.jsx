import React from "react";
import Header from '../Components/Header.jsx';



function Layout({ children }) {
    return (
        <>
            <Header children = 'Photo Fetcher'/>
            {children}
        </>
    );
}

export default Layout;