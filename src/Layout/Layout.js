import React from 'react';
import Header from '../components/Header/Header';

function Layout({ children }) {
   const handleToggle = () => {};
  const handleFetch = () => {};
  
  return (
    <div className="layout">
      <header>
        <h1>Photo Fetcher</h1>
        <Header handleToggle={handleToggle} handleFetch={handleFetch} />
      </header>
      <main>{children}</main>
    </div>
  );
}
export default Layout;
