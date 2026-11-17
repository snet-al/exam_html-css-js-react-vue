import React from "react";

const MainLayout = ({children}) =>{
    return (
        <main className="container">
            <h2>Photo Fetcher</h2>
            {children}
        </main>
    );
}

export default MainLayout;