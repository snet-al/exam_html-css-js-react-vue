import HeaderText from "./components/HeaderText/HeaderText"
import Card from "./components/Card/Card"
import SecondaryHeader from './components/SecondaryHeaderText/SecondaryHeader'
import Button from "./components/Button/Button"
import Switcher from "./components/Switcher/Switcher"
import './App.css';

function App() {
  return (
    <>
    <header>
        <HeaderText/> <br />
        <hgroup>
          <Switcher/>
          <SecondaryHeader/>
          <Button/>
        </hgroup>
      </header>
      <section className='container'>
        <Card/>
      </section>
    </>
  );
}

export default App;
