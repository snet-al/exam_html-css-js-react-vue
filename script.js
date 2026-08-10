const grayscaleBtn = document.querySelector(".grayscale-btn");
const fetchPhotosBtn = document.querySelector(".fetch-btn");
const loadPhotosBtn = document.querySelector(".load-btn");


grayscaleBtn.addEventListener("click", grayScaleFunction);
fetchPhotosBtn.addEventListener("click", fetchPhotosFunction);
loadPhotosBtn.addEventListener("click", loadPhotosFunction);

let imgCount = 1;

let seed = () => Math.floor(Math.random() * 101);
let isGray = false;

function fetchPhotosFunction(){
    const photos = document.querySelectorAll(".photo");
    const links = document.querySelectorAll(".link");
    photos.forEach((photo, index) => {
        let randomseed = seed();
        photo.setAttribute("src", 
            "https://picsum.photos/seed/"+randomseed+"/2160?");
        links[index].innerHTML = "https://picsum.photos/seed/"+randomseed+"/2160?";
    });
    
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
    imgCount += 1;
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

    document.querySelector(".photo-grid").innerHTML = html.repeat(imgCount);
    
    fetchPhotosFunction();
}

fetchPhotosFunction();
console.log(seed())