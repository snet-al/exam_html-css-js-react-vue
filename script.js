const grayscaleBtn = document.querySelector(".grayscale-btn");
const fetchPhotosBtn = document.querySelector(".fetch-btn");
const photos = document.querySelectorAll(".photo");
const links = document.querySelectorAll(".link")

grayscaleBtn.addEventListener("click", grayScaleFunction);
fetchPhotosBtn.addEventListener("click", fetchPhotosFunction);

let seed = () => Math.floor(Math.random() * 101);
let isGray = false;

function fetchPhotosFunction(){
    photos.forEach((photo, index) => {
        let randomseed = seed();
        photo.setAttribute("src", 
            "https://picsum.photos/seed/"+randomseed+"/2160?");
        links[index].innerHTML = "https://picsum.photos/seed/"+randomseed+"/2160?";
    });
    
}

function grayScaleFunction(){
    isGray = !isGray;

    photos.forEach((photo, index) => {
        let src = photo.getAttribute("src")

        if(isGray){
            src += "grayscale"
            photo.setAttribute("src", src);
            links[index].innerHTML = src;
        }else{
            let srcc = src.slice(0, -9);
            photo.setAttribute("src", srcc);
            links[index].innerHTML = srcc;
        }        
    });
}

fetchPhotosFunction();
console.log(seed())