import React from "react";

const MainLayout = ({ children }) => {
    return (
        <main className="container">
            <header className="header">
                <h1 className="title">Photo Fetcher</h1>
            </header>
            <section className="content">
                {children}
            </section>
        </main>
    );
};

export default MainLayout;