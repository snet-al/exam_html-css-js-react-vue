import Button from "./UI/Button"
import Toggle from "./UI/Toggle"

function ToolBar(props){
   return( 
    <section className="controls">
        <Toggle inputClass='js-grayscaleToggle'  onClick={props.onToggle} spanText="Make photos grayscale"/>
        <Button className='js-fetch-button' id='fetchBtn' onClick={props.onFetch} text="Fetch New Photos"/>      
    </section>
   )
}

export default ToolBar