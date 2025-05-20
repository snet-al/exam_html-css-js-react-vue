async function getAPI() {
    const response = await fetch("https://picsum.photos/v2/list")
    const text = await response.json()
    return text
}

async function fetchNewPhotos(){
    const photos = await getAPI();

    const randomItemList = [];
    while (randomItemList.length < 4) {
    const rand = Math.floor(Math.random() * photos.length);
    if (!randomItemList.includes(rand)) randomItemList.push(rand);
    }

    
    const selectedPhotos = photos.filter(photo => randomItemList.includes(Number(photo.id)));

    let html = ``
    selectedPhotos.forEach((img) => {
        document.querySelector('.js-photo').innerHTML =
        html += 
        `
        <figure class="photo-card">
            <img src="${img.download_url}" alt="Random photo">
            <figcaption>
                <p>${img.author}</p>
                <a href="${img.url}">${img.url}</a>
            </figcaption>
        </figure>        
        `
    })
}   
fetchNewPhotos()  

document.querySelector('.js-fetch-button').addEventListener('click', () => fetchNewPhotos())

document.querySelector(".js-grayscaleToggle").addEventListener("click", function() {
        document.querySelectorAll(".photo-card img").forEach(img => {
            img.style.filter = this.checked ? "grayscale(100%)" : "none";
        });
    });


