import React from "react";
import Header from '../Components/Header.jsx';

function Layout({children}) {
    return (
        <>
            <Header> Photo Fetcher </Header>
            {children}
        </>
    );
}

export default Layout;