import React from 'react';

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>Photo Fetcher</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
