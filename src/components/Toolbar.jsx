import { ToggleButton } from './componentsUI/ToggleButton.jsx'
import { FetchButton } from './componentsUI/FetchButton.jsx'
import './Toolbar.css'
export function Toolbar() {
  return (
    <section className="toolbar">
      <ToggleButton />
      <FetchButton />
    </section>
  )
}