import '../../index.css'
import { useApi } from '../../services/apiContext'
function Footer(){
    const {fetchData}=useApi()
return (
    <>
        <footer>
            <button className="morePhotosBttn" onClick={()=>{fetchData()}}>More Photos</button>
        </footer>
    </>
)
}
export default Footer