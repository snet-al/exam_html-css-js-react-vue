const fetchPhotosBtn = document.querySelector(".fetch-btn");
const grayScaleCheckbox = document.getElementById("grayscale");
const morePhotosBtn = document.querySelector(".more-photos-btn");
const photosGallery = document.querySelector(".gallery");

const getPhotos = async () => {
    try {
        const randomPage = Math.floor((Math.random() * 10) + 1);
        const res = await fetch(`https://picsum.photos/v2/list?page=${randomPage}&limit=4`);
        const pictures = await res.json();
        displayPhotos(pictures);
    } catch(error) {
        console.log("Ndodhi nje gabim", error);
    };
};

const displayPhotos = (pictures) => {
    pictures.forEach(photo => {
       const photoCard = document.createElement("figure");
       photoCard.classList.add("photo-card");
       photoCard.innerHTML = `
            <img src="${photo.download_url}" alt="${photo.author}">
            <figcaption>
                <p>${photo.author}</p>
                <a href="${photo.url}">${photo.url}</a>
            </figcaption>
       `;
       photosGallery.appendChild(photoCard);
    });
};

getPhotos();

fetchPhotosBtn.addEventListener("click", () => {
    photosGallery.innerHTML = "";
    getPhotos();
});

grayScaleCheckbox.addEventListener("change", () => {
    if(grayScaleCheckbox.checked){
        photosGallery.classList.add("grayscale");
    } else {
        photosGallery.classList.remove("grayscale");
    }
});

morePhotosBtn.addEventListener("click", () => {
    getPhotos();
});