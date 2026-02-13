import {useState} from "react"
import Picture from "../../components/Picture/Picture.tsx"
import Switch from "../../components/Switch/Switch.tsx"
import "./PictureBoard.css"

function PictureBoard() {
    const [reload, setReload] = useState<boolean>(false)
    const [grayscale, setGrayscale] = useState<boolean>(false)
    const [pictures, setPictures] = useState<{trigger : boolean, grayscale : boolean}[]>(
        [
            {trigger: reload, grayscale: grayscale},
            {trigger: reload, grayscale: grayscale},
            {trigger: reload, grayscale: grayscale},
            {trigger: reload, grayscale: grayscale}
        ]
    )

    function addFour() {
        const newA = [
            ...pictures,
            {trigger: reload, grayscale: grayscale},
            {trigger: reload, grayscale: grayscale},
            {trigger: reload, grayscale: grayscale},
            {trigger: reload, grayscale: grayscale},
        ]
        setPictures([...newA])
    }

    return (
        <>
            <div id="top-section">
                <h1>Photo Fetcher</h1>
                <Switch onSwitch={setGrayscale} text="Make photos grayscale"/>
                {/*<button onClick={() => setGrayscale(c => !c)}>Grayscale</button>*/}
                <button onClick={() => setReload(c => !c)} id="reload">Fetch New Photos</button>
            </div>
            <div className="container" key="board">
                {pictures.map((p, i) => <Picture trigger={p.trigger} grayscale={p.grayscale} index={i}/>)}
            </div>
            <button onClick={addFour} id="add-pics">More Photos</button>
        </>
    )
}

export default PictureBoard