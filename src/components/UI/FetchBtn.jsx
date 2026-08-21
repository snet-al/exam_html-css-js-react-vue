import "../../css/FetchBtn.css"

function FetchBtn ({onClickFunction}) {
    return (
        <button className="fetchBtn" onClick={onClickFunction}>
            Fetch New Photos
        </button>
    )
}

export default FetchBtn
