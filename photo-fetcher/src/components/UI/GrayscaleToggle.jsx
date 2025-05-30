import { useAppContext } from "../../App"

export default function GrayscaleToggle(){
    const {setGrayscale} = useAppContext()
    return(
        <label className="switch">
                        <input type="checkbox"  id="grayscale-toggle"
                        onChange={()=>{
                            setGrayscale(g=>!g)

                        }}
                        
                        
                        />
                        <span className="slider round"></span>
                    </label>
    )

}