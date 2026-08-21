const grayscaleBtn = document.querySelector(".grayscale-btn");
const fetchPhotosBtn = document.querySelector(".fetch-btn");
const loadPhotosBtn = document.querySelector(".load-btn");


grayscaleBtn.addEventListener("click", grayScaleFunction);
fetchPhotosBtn.addEventListener("click", () => {fetchPhotosFunction(true)});
loadPhotosBtn.addEventListener("click", loadPhotosFunction);

let html = `<figure class="figure">
                        <img src="" 
                        alt="photo" class="photo">
                        <div class="description">
                            <h3 class="title">Photo</h3>
                            <p class="link"></p>
                        </div>
                    </figure>
                    <figure class="figure">
                        <img src="" 
                        alt="photo" class="photo">
                        <div class="description">
                            <h3 class="title">Photo</h3>
                            <p class="link"></p>
                        </div>
                    </figure>
                    <figure class="figure">
                        <img src="" 
                        alt="photo" class="photo">
                        <div class="description">
                            <h3 class="title">Amazing photo</h3>
                            <p class="link"></p>
                        </div>
                    </figure>
                    <figure class="figure">
                        <img src="" 
                        alt="photo" class="photo">
                        <div class="description">
                            <h3 class="title">Photo</h3>
                            <p class="link"></p>
                        </div>
                    </figure>`;


let seed = () => Math.floor(Math.random() * 101);
let isGray = false;

function fetchPhotosFunction(fetch){
    const photos = document.querySelectorAll(".photo");
    const links = document.querySelectorAll(".link");

    if (fetch == false){
        photos.forEach((photo, index) => {
            if(photo.getAttribute("alt") == "photo"){
                let randomseed = seed();
                photo.setAttribute("src", 
                    "https://picsum.photos/seed/"+randomseed+"/2160?");

                photo.setAttribute("alt", "photo-linked");

                links[index].innerHTML = "https://picsum.photos/seed/"+randomseed+"/2160?"; 
            }
            return;
        });    
    }else{
        document.querySelector(".photo-grid").innerHTML = html;
        fetchPhotosFunction(false);
    }

}

function grayScaleFunction(){
    const photos = document.querySelectorAll(".photo");
    const links = document.querySelectorAll(".link");
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

function loadPhotosFunction(){

    document.querySelector(".photo-grid").innerHTML += html;
    
    fetchPhotosFunction(false);
}

fetchPhotosFunction(true);
