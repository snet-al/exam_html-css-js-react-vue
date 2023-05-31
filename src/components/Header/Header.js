// import React from 'react';
// import './Header.css';
// import Toggle from '../Toggle/Toggle';

// function Header({ handleToggle, handleFetch }) {
//   return (
//     <div className="row">
//       <Toggle onChange={handleToggle} />
//       <h5 className="toggletext">Make photos grayscale</h5>
//       <button className="button" onClick={() => handleFetch()}>
//         Fetch New Photos
//       </button>
//     </div>
//   );
// }

// export default Header;


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
      {/* <h5 className="toggletext">Make photos grayscale</h5> */}
      <ToggleText />
      <Button onClick={handleFetch} />
    </div>
    </div>
  );
}

export default Header;
