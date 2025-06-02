// Setting up the javascript
const imagesContainer=document.querySelector(".images-container")
const fetchNewImagesButton=document.getElementById("fetch-new-photos")
const fetchMoreImagesButton=document.getElementById("fetch-more-photos")
const grayscaleCheckbox=document.getElementById("grayscale-toggle")

let loading;


const displayImage=(image)=>{
    let imgContainer=document.createElement("div")
    imgContainer.classList.add("img-container")

    let skeletonDiv=document.createElement("div")
    skeletonDiv.classList.add("skeleton-div")

    let imgOverlay=document.createElement("div")
    imgOverlay.classList.add("img-overlay")

    let authorTitle = document.createElement("h2")
    authorTitle.textContent=image.author

    let photoUrl = document.createElement("p")
    photoUrl.textContent=image.url
    
    imgOverlay.append(authorTitle,photoUrl)    
    imgContainer.appendChild(skeletonDiv)

    imagesContainer.appendChild(imgContainer)
    
    let newImage=document.createElement("img")
    newImage.alt=image.author
    newImage.src=image.download_url
    
    newImage.onload=()=>{
        skeletonDiv.replaceWith(newImage)
        imgContainer.appendChild(imgOverlay)
    }
}

const giveRandomPageIndex=()=>{
    return Math.floor(Math.random() * 4) + 1;
}


async function fetchImages(randomPageIndex){
    try{
        loading=true;
        const res= await fetch(`https://picsum.photos/v2/list?page=${randomPageIndex}&limit=100`)
        if(!res.ok) throw new Error("Network response was not ok");
        const data= await res.json()
        
        for(let i=1;i<=4;i++){
            let randomPhotoIndex = Math.floor(Math.random() * data.length);
            displayImage(data[randomPhotoIndex])
        }
    }
    catch(error){
        console.error("Error:",error)
    }
    finally{loading=false}

}

fetchNewImagesButton.addEventListener("click",()=> {
    if(loading) return
    imagesContainer.innerHTML=""
    fetchImages(giveRandomPageIndex())
})
    
fetchMoreImagesButton.addEventListener("click",()=> {
    if(loading) return
    fetchImages(giveRandomPageIndex())
})
    
grayscaleCheckbox.addEventListener("change",()=>{
        if(grayscaleCheckbox.checked) imagesContainer.style.filter="grayscale(100%)"
        else imagesContainer.style.filter="grayscale(0%)"
    })


fetchImages(giveRandomPageIndex())