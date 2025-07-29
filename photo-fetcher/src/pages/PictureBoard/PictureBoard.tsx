import {useEffect, useState} from "react"
import Switch from "../../components/Switch/Switch.tsx"
import "./PictureBoard.css"
import Picture, {type PictureProps} from "../../components/Picture/Picture.tsx"
import FetchingService from "../../services/FetchingService.ts"

function PictureBoard() {
    const [grayscale, setGrayscale] = useState<boolean>(false)
    const [pictures, setPictures] = useState<PictureProps[]>([])

    function addFour() {
        for (let i = 0; i < 4; i++) {
            FetchingService.fetchRandom(grayscale)
                .then(value => {
                    setPictures(newP => [...newP, {...value, key: crypto.randomUUID()}])
                })
        }
    }

    useEffect(addFour, []);

    function toggleGray() {
        // i shouldn't mutate while looping but damnit it's too late
        pictures.forEach((value, index) => {
            FetchingService.fetchSpecific(value.id, !grayscale)
                .then(blob => {
                    setPictures(p => [...p.slice(0, index), {...value, blob}, ...p.slice(index + 1)])
                })
        })

        setGrayscale(c => !c)
    }

    function reloadPics() {
        pictures.forEach((value, index) => {
            FetchingService.fetchRandom(grayscale)
                .then(newValue => {
                    setPictures(p => [...p.slice(0, index), {...value, ...newValue}, ...p.slice(index + 1)])
                })
        })
    }

    return (
        <>
            <div id="top-section">
                <h1>Photo Fetcher</h1>
                <Switch onSwitch={toggleGray} checked={grayscale} text="Make photos grayscale"/>
                <button onClick={reloadPics} id="reload">Fetch New Photos</button>
            </div>
            <div className="container" key="board">
                {pictures.map(({author, id, url, blob, key}) =>
                    <Picture author={author} id={id} url={url} blob={blob} key={key}/>
                )}
            </div>
            <button onClick={addFour} id="add-pics">More Photos</button>
        </>
    )
}

export default PictureBoard