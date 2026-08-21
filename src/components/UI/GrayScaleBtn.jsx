import "../../css/GrayScaleBtn.css"
import { useState } from "react"
import { useEffect } from "react"


function GrayScaleBtn ({onClickFunction}) {
    const [grayScale, setGrayScale] = useState(false)

    return(
        <button className="grayScaleBtn" onClick={(e) => {
            e.target.classList.toggle("active-class");
            setGrayScale(!grayScale)
            onClickFunction(!grayScale);
            console.log(grayScale)
            }}>
            Make Grayscale
        </button>
    )
}

export default GrayScaleBtn
