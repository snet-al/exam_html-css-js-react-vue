import React from 'react';
import './Header.css';
import Button from '../../UI/Button/Button';
import Toggle from '../../UI/Toggle/Toggle';
import Title from '../Title/Title';
import ToggleText from '../ToggleText/ToggleText';

function Header({ handleToggle, handleFetch }) {
  return (
    <div>
      <Title />
     <div className="row">
      <Toggle onChange={handleToggle} />
      <ToggleText />
      <Button onClick={handleFetch} />
     </div>
    </div>
  );
}

export default Header;
