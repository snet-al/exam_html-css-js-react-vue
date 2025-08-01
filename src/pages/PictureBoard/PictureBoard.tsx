import {memo, useEffect, useState} from "react"
import Switch from "../../components/Switch/Switch"
import "./PictureBoard.css"
import Picture, {type PictureProps} from "../../components/Picture/Picture"
import FetchingService from "../../services/FetchingService"

function PictureBoard() {
    const [grayscale, setGrayscale] = useState<boolean>(false)
    const [pictures, setPictures] = useState<PictureProps[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    async function addFour() {
        setLoading(true)
        try {
            const newPictures = await Promise.all(
                Array.from({length: 4}, () => 
                    FetchingService.fetchRandom(grayscale)
                        .then(value => ({...value, key: crypto.randomUUID()}))
                )
            )
            setPictures(prev => [...prev, ...newPictures])
        } catch (error) {
            console.error('Failed to fetch photos:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        addFour()
    }, [])

    async function toggleGray() {
        setLoading(true)
        try {
            const updatedPictures = await Promise.all(
                pictures.map(async (picture) => {
                    const blob = await FetchingService.fetchSpecific(picture.id, !grayscale)
                    return {...picture, blob}
                })
            )
            setPictures(updatedPictures)
            setGrayscale(prev => !prev)
        } catch (error) {
            console.error('Failed to toggle grayscale:', error)
        } finally {
            setLoading(false)
        }
    }

    async function reloadPics() {
        setLoading(true)
        try {
            const newPictures = await Promise.all(
                Array.from({length: 4}, async () => {
                    const newPicture = await FetchingService.fetchRandom(grayscale)
                    return {...newPicture, key: crypto.randomUUID()}
                })
            )
            setPictures(newPictures)
        } catch (error) {
            console.error('Failed to reload photos:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div id="top-section">
                <h1>Photo Fetcher</h1>
                <div id="controls">
                    <Switch onSwitch={toggleGray} checked={grayscale} text="Make photos grayscale"/>
                    <button onClick={reloadPics} id="reload" disabled={loading}>
                        {loading ? 'Loading...' : 'Fetch New Photos'}
                    </button>
                </div>
            </div>
            <div className="container">
                {pictures.map(({author, id, url, blob, key}) =>
                    <Picture author={author} id={id} url={url} blob={blob} key={key}/>
                )}
            </div>
            {pictures.length >= 4 && (
                <div id="more-section">
                    <button onClick={addFour} id="more-btn" disabled={loading}>
                        {loading ? 'Loading...' : 'More Photos'}
                    </button>
                </div>
            )}
        </>
    )
}

export default memo(PictureBoard)
