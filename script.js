const grayscaleBtn = document.querySelector(".grayscale-btn");
const fetchPhotosBtn = document.querySelector(".fetch-btn");
const loadPhotosBtn = document.querySelector(".load-btn");


grayscaleBtn.addEventListener("click", toggleGrayScale);
fetchPhotosBtn.addEventListener("click", fetchNewPhotos);
loadPhotosBtn.addEventListener("click", loadPhotosFunction);

let html = `<figure class="figure">
                        <img src="" 
                        alt="photo" class="photo">
                        <figcaption class="description">
                            <h3 class="title">Amazing photo</h3>
                            <p class="link"></p>
                        </figcaption>
                    </figure>
                    <figure class="figure">
                        <img src="" 
                        alt="photo" class="photo">
                        <figcaption class="description">
                            <h3 class="title">Amazing photo</h3>
                            <p class="link"></p>
                        </figcaption>
                    </figure>
                    <figure class="figure">
                        <img src="" 
                        alt="photo" class="photo">
                        <figcaption class="description">
                            <h3 class="title">Amazing photo</h3>
                            <p class="link"></p>
                        </figcaption>
                    </figure>
                    <figure class="figure">
                        <img src="" 
                        alt="photo" class="photo">
                        <figcaption class="description">
                            <h3 class="title">Photo</h3>
                            <p class="link"></p>
                        </figcaption>
                    </figure>`;


let seed = () => Math.floor(Math.random() * 101);
let isGray = false;

function getPhotos() {
    const photos = document.querySelectorAll(".photo");
    const links = document.querySelectorAll(".link");

    photos.forEach((photo, index) => {
        if (photo.getAttribute("src")) return;

        const randomseed = seed();
        const url = "https://picsum.photos/seed/" + randomseed + "/2160?";

        photo.setAttribute("src", url);
        links[index].innerHTML = url;
    });
}

function fetchNewPhotos() {
    document.querySelector(".photo-grid").innerHTML = html;
    getPhotos();
}

function toggleGrayScale(){
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
    getPhotos();
}

fetchNewPhotos();
