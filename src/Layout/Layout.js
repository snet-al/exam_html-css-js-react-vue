import React from 'react';

function Layout({ children }) {

  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  );
}
export default Layout;
