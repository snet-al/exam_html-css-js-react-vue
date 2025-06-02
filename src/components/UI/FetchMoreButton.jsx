export default function FetchMoreButton({children,context}){
        const {fetchData,loading,setLoading}=context
        return(
            <button className="fetch-button" id="fetch-more-photos"
            onClick={()=>{
                if(loading) return                
                setLoading(true)
                fetchData(false)
            }}
            >{children}</button>

    )
} 

