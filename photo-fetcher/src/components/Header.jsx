import GrayscaleToggle from "./UI/GrayscaleToggle"
import FetchNewButton from "./UI/FetchNewButton"
function Header(){
    
    return(
        <header>
            <h1>Photo Fetcher</h1>
            <div className="user-input-header">
                <div className="grayscale-group">
                    <GrayscaleToggle/>
                    <span>Make photos grayscale</span>
                </div>
                <FetchNewButton/>
            </div>
        </header>
    )
}
export default Header
