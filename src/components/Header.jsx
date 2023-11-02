import React from 'react'
import Button from './UI/Button'
import Title from './UI/Title'
import Toggle from './UI/Toggle'

const Header = ({newImages , onToggleHandler}) => {
  return (
    <section>
    <Title title="Photo Fetcher"/>
          <Toggle onToggleHandler={onToggleHandler}/>
          <Button text="Fetch New Photos" onClick = {newImages}/>
    </section>
  );
};
export default Header;