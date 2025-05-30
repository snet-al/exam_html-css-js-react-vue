import { useAppContext } from "../../App"

export default function FetchMoreButton(){
    const {loading,setLoading,fetchData}=useAppContext()
    return(
    <button className="fetch-buttons" id="fetch-more-photos" 
    onClick={()=>{
        if(loading) return
        
        setLoading(true)
        fetchData(false)
        console.log(loading);
    }}
    
    >More Photos</button>
    )
} 