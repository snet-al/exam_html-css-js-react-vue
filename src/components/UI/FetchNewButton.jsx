export default function FetchNewButton({children,context}){
    const {fetchData,loading,setLoading}=context
    return(
                <button  className="fetch-button" id="fetch-new-photos"
                onClick={()=>{
                if(loading) return
                setLoading(true)    
                fetchData(true)
    }}
                >{children}</button>

    )
}
