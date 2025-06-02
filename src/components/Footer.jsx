import FetchMoreButton from "./UI/FetchMoreButton"
function Footer({context}){
    
    return(
        <footer>
            <FetchMoreButton context={context}>More Photos</FetchMoreButton>        
        </footer>
    )
}
export default Footer