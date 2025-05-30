import { useAppContext } from "../../App"

export default function FetchNewButton(){
    const {loading,setLoading,fetchData}=useAppContext()

    return(
        <button  className="fetch-buttons" id="fetch-new-photos"
      onClick={()=>{
        if(loading) return
        
        setLoading(true)
        fetchData(true)
        console.log(loading);
    }}
        
        >Fetch new Photos</button>

    )
}