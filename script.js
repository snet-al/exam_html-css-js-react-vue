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


function fetchImages(){
    let randomPageIndex = Math.floor(Math.random() * 8) + 1;

    fetch(`https://picsum.photos/v2/list?page=${randomPageIndex}&limit=50`)
    .then((res)=> {
        if(!res.ok) throw new Error("Network response was not ok");
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        for(let iteration=1;iteration<=4;iteration++){
            let randomPhotoIndex = Math.floor(Math.random() * data.length);
            displayImage(data[randomPhotoIndex])
        }
    })
    .catch((error)=>console.error("Error:",error))
    .finally(()=> loading=false)

}

function fetchNewImages(){
    if(loading) return
    loading=true
    imagesContainer.innerHTML=""
    fetchImages()
}
 function fetchMoreImages(){
    if(loading) return
    loading=true
    fetchImages()
}


//Giving the event listners and starting the site
(function(){

    fetchNewImagesButton.addEventListener("click",()=> fetchNewImages())
    
    fetchMoreImagesButton.addEventListener("click",()=> fetchMoreImages())
    
    grayscaleCheckbox.addEventListener("change",()=>{
        if(grayscaleCheckbox.checked) imagesContainer.style.filter="grayscale(100%)"
        else imagesContainer.style.filter="grayscale(0%)"
    })
    fetchNewImages()
})()

