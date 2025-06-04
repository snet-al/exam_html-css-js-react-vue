import '../../index.css'
import { useApi } from '../../services/apiContext'
function Header(){
    const {callNewPhotos,toggleGrayscale}=useApi()

    return (
        <>
        <header className="header">Photo Fetcher</header>

        <nav className="navBar">
            <section className="grayscaleSection">
                <input type="checkbox" id="check" className="toggle-checkbox" onChange={()=>{toggleGrayscale()}}/>
                <label  htmlFor="check" className="toggle-label">
                </label>
                <span style={{fontSize: "20px"}}>Make photos grayscale</span>
            </section>

            <button className="FetchNewButton" onClick={()=>{callNewPhotos()} } >Fetch New Photos</button>
        </nav>
        </>
    )
}
export default Header