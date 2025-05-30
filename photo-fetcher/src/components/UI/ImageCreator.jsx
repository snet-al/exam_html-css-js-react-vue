import {useState} from "react"
export default function ImageCreator({img}){
    const [imgLoading,setImgLoading]=useState(true)
    return(
        <div className="img-container"  >
            {imgLoading && <div className="skeleton-div"></div>}

            <img src={img.download_url} style={{display:imgLoading? "none":"block"}} alt={img.download_url} onLoad={()=>setImgLoading(false)} />

            
            <div className="img-overlay">
                <h2>{img.author}</h2>
                <p>{img.url}</p>
            </div>
        </div>
    )
}