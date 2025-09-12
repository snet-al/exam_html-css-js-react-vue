// components/UI/LoadingError.jsx
import React from 'react';
import Button from './button';

const LoadingError = ({ error, onRetry }) => (
  <div className="text-center py-8 col-span-full">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Failed to load photos</h3>
    <p className="text-gray-600 mb-2">Error: {error}</p>
    <p className="text-gray-600 mb-4">Please check your internet connection and try again.</p>
    <Button onClick={onRetry}>Retry</Button>
  </div>
);

export default LoadingError;