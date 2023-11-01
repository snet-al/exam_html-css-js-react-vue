import React from 'react'
import Button from './UI/Button'
import Title from './UI/Title'
import Toggle from './UI/Toggle'

const Header = () => {
  return (
    <section>
    <Title title="Photo Fetcher"/>
          <Toggle/>
          <Button text="Fetch New Photos" />
    </section>
  );
};
export default Header;