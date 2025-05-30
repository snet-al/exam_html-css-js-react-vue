const fetchPicsumAPI=async ()=>{
    const imgFetched=[]
    let randomPageIndex = Math.floor(Math.random() * 4) + 1;

    try{
        const res= await fetch(`https://picsum.photos/v2/list?page=${randomPageIndex}&limit=100`)
        if(!res.ok) throw new Error("Network response was not ok");
        const data= await res.json()
        
        for(let iteration=1;iteration<=4;iteration++){
            let randomPhotoIndex = Math.floor(Math.random() * data.length);
            imgFetched.push(data[randomPhotoIndex])
        }
    }
    catch(error){
        console.error("Error:",error)
    }

    return imgFetched
}
export default fetchPicsumAPI