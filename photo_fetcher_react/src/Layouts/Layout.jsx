import React from "react";
import Header from '../Components/Header.jsx';
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header> Photo Fetcher </Header>
            <Outlet />
        </>
    );
}

export default Layout;