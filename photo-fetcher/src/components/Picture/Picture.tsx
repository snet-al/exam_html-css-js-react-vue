// import {useEffect, useState} from "react"
import "./Picture.css"
import dummyData from "../../store/pics.ts"

interface PictureProps {
    grayscale? : boolean
    index : number
    trigger: boolean
}
function Picture({index} : PictureProps) {
    // const [image, setImage] = useState<string>("https://picsum.photos/1")
    // const [id, setId] = useState<number>(-1)
    // const [metaData, setMetaData] = useState<{author : string, url : string}>({author: "", url: ""})


    // useEffect(() => {
    //     if (image === "https://picsum.photos/1") {
    //         fetch(image)
    //             .then((response) => {
    //                 const val = response.headers.get("Picsum-ID")
    //                 const parsed = val ? parseInt(val) : 0
    //                 setId(parsed)
    //                 setImage(`https://picsum.photos/id/${parsed}/351/250${grayscale ? "?grayscale" : ""}`)
    //                 return fetch(`https://picsum.photos/id/${parsed}/info`)
    //             })
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 setMetaData(json)
    //                 console.log(json)
    //             })
    //             .catch((reason) =>
    //                 console.log(`Failure during image processing: ${reason}`))
    //     } else {
    //         setImage(`https://picsum.photos/id/${id}/351/250${grayscale ? "?grayscale" : ""}`)
    //     }
    // }, [grayscale, image, id])

    // useEffect(() => {
    //     setImage("https://picsum.photos/1")
    // }, [trigger])

    const id = index
    const metaData = {author: `Dummy Image ${index}` , url: dummyData[index]}
    const image = metaData.url

    return (
        <div className="picture-frame" id={`${id}`}>
            <img src={image} alt={`${id}`} />
            <div className="overlay">
                <h3>{metaData.author}</h3>
                <a href={metaData.url}>{metaData.url}</a>
            </div>
        </div>
    )
}

export default Picture