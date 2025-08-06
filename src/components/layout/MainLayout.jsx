import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MainLayout.css';

const MainLayout = ({ children, className = "" }) => {
    return (
        <div className={`main-layout ${className}`}>
            <Header />
            <main className="content" role="main">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;