import { ToggleButton } from './ui/ToggleButton.jsx'

export function Toolbar() {
  return (
    <section className="toolbar">
      <ToggleButton >
        Make photos greyscale
      </ToggleButton>

      <button className="fetch-button">Fetch New Photos</button>
    </section>
  )
}