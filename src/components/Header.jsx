import GrayscaleToggle from "./UI/GrayscaleToggle"
import FetchNewButton from "./UI/FetchNewButton"
function Header({context}){
    const {setGrayscale,fetchData,loading,setLoading}=context
    return(
        <header>
            <h1>Photo Fetcher</h1>
            <div className="user-input-header">
                
                <GrayscaleToggle setGrayscale={setGrayscale}/>
                    
                <FetchNewButton context={{fetchData,loading,setLoading}}>Fetch new Photos</FetchNewButton>
            </div>
        </header>
    )
}
export default Header