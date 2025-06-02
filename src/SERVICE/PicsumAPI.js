class PicsumAPI{
    static API_URL='https://picsum.photos/v2/list'
    static async getPhotos(randomPageIndex,numberOfPhotos){
        const imagesFetched=[];
        try{
        const res= await fetch(`${PicsumAPI.API_URL}?page=${randomPageIndex}&limit=100`)
        const data= await res.json()
        
        for(let i=1;i<=numberOfPhotos;i++){
            let randomPhotoIndex = Math.floor(Math.random() * data.length);
            imagesFetched.push(data[randomPhotoIndex])
        }
    }
    catch(error){
        console.error("Error:",error)
    }

    return imagesFetched

    }
}

export default PicsumAPI
