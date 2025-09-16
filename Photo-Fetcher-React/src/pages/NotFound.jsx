import React from 'react';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">404</h2>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      <p className="text-gray-600 mt-2">To test this page after routing is added, try visiting a path that isn’t defined (for example, <span className="font-mono">/random-page</span>).</p>
    </div>
  );
};

export default NotFound;