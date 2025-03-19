import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MainLayout.css';

const MainLayout = ({ children, onToggleHandler, onFetchNewPhotos, onLoadMore }) => {
    return (
        <div className="main-layout">
            <Header onToggleGrayscale={onToggleHandler} onFetchNewPhotos={onFetchNewPhotos} />
            <main className="content">
                {children}
            </main>
            <Footer onLoadMore={onLoadMore} />
        </div>
    );
};

export default MainLayout;