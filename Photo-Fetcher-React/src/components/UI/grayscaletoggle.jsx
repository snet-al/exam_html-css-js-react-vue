import React from 'react';

const GrayscaleToggle = ({ isGrayscale, onToggle }) => (
  <label className="relative inline-flex items-center gap-4 cursor-pointer">
    <input
      type="checkbox"
      checked={isGrayscale}
      onChange={onToggle}
      className="sr-only peer"
    />
    <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
    <span className="text-gray-700 font-medium">Make photos grayscale</span>
  </label>
);


export default GrayscaleToggle;
