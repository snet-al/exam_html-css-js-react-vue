import React from 'react';
import Header from '../../components/Header/Header';

const PublicLayout = ({ children , toggleGrayscale ,handleFetchClick}) => {
  return (
    <div>
      <Header toggleGrayscale={toggleGrayscale} handleFetchClick={handleFetchClick}/>
      {children}
    </div>
  );
};

export default PublicLayout;
