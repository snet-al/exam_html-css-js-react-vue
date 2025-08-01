import "./Picture.css"
interface PictureProps {
    author: string
    id: number
    url: string
    blob: string
    key: string
}
function Picture({author, id, url, blob} : PictureProps) {
    return (
        <div className="picture-frame" >
            <img src={blob !== "" ? blob : undefined} alt={`${id}`}/>
            <div className="overlay">
                <h3>{author}</h3>
                <a href={url}>{url}</a>
            </div>
        </div>
    )
}
export default Picture
export type {PictureProps}
