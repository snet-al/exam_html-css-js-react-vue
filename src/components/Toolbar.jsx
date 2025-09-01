import { ToggleButton } from './componentsUI/ToggleButton.jsx'
import { FetchButton } from './componentsUI/FetchButton.jsx'
import './Toolbar.css'
export function Toolbar({setImages, isGrey, setIsGrey}) {
  return (
    <section className="toolbar">
      <ToggleButton isGrey = {isGrey} setIsGrey={setIsGrey}/>
      <FetchButton setImages={ setImages }/>
    </section>
  )
}