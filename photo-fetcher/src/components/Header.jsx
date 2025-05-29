function Header(){
    
    return(
        <header>
            <h1>Photo Fetcher</h1>
            <div className="user-input-header">
                <div className="grayscale-group">
                    <label className="switch">
                        <input type="checkbox"  id="grayscale-toggle"/>
                        <span className="slider round"></span>
                    </label>
                    <span>Make photos grayscale</span>
                </div>
                <button  className="fetch-buttons" id="fetch-new-photos">Fetch new Photos</button>
            </div>
        </header>
    )
}
export default Header
