import '../../index.css'

function Header(){
    return (
        <>
         <header className="header">Photo Fetcher</header>

        <nav className="navBar">
            <section className="grayscaleSection">
                <input type="checkbox" id="check" class="toggle-checkbox"/>
                <label for="check" class="toggle-label">
                </label>
                <span style={{fontSize: "20px"}}>Make photos grayscale</span>
            </section>

            <button className="FetchNewButton">Fetch New Photos</button>
        </nav>
        </>
    )
}
export default Header