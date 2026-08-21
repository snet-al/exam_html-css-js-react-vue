import "../../css/LoadBtn.css"

function LoadBtn ({onClickFunction}) {
    return (
        <button className="loadBtn" onClick={onClickFunction}>
            Load More Photos
        </button>
    )
}

export default LoadBtn
