async function getAPI() {
    try {

        const response = await fetch("https://picsum.photos/v2/list");
        if (!response.ok) {
            throw new Error('Failed to fetch photos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
}

function showSkeletonLoader() {
    let skeletonHtml = '';
    for (let i = 0; i < 4; i++) {
        skeletonHtml += `
        <figure class="photo-card skeleton">
            <div class="skeleton-img"></div>
            <figcaption>
                <p class="skeleton-text"></p>
                <p class="skeleton-text skeleton-url"></p>
            </figcaption>
        </figure>
        `;
    }
    document.querySelector('.js-photo').innerHTML += skeletonHtml;
}

function hideSkeletonLoader() {
    const skeletonElements = document.querySelectorAll('.skeleton');
    skeletonElements.forEach(el => el.remove());
}

let html = ``

async function getRandomPhotos(count = 4) {
    const photos = await getAPI();

    const randomItemList = [];
    while (randomItemList.length < count) {
        const rand = Math.floor(Math.random() * photos.length);
        if (!randomItemList.includes(rand)) randomItemList.push(rand);
    }

    return photos.filter((photo) => randomItemList.includes(Number(photo.id)));
}

function createPhotoHTML(photos) {
    return photos
        .map(
            (img) => `
        <figure class="photo-card">
            <img src="${img.download_url}" alt="Random photo">
            <figcaption>
                <p>${img.author}</p>
                <a href="${img.url}">${img.url}</a>
            </figcaption>
        </figure>`
        )
        .join('');
}

async function fetchNewPhotos() {
    const selectedPhotos = await getRandomPhotos();
    html = createPhotoHTML(selectedPhotos);
    document.querySelector('.js-photo').innerHTML = html;
}

async function MorePhotos() {
    showSkeletonLoader();
    const selectedPhotos = await getRandomPhotos();
    hideSkeletonLoader();
    html += createPhotoHTML(selectedPhotos);
    document.querySelector('.js-photo').innerHTML = html;
}

fetchNewPhotos()

document.querySelector('.js-load-more').addEventListener('click', async () => {
    await MorePhotos()
    makeGray()
})

document.querySelector('.js-fetch-button').addEventListener('click', async () => {
    await fetchNewPhotos()
    makeGray()
})

function makeGray() {
     if (document.querySelector(".js-grayscaleToggle").checked){
        document.querySelectorAll(".photo-card img").forEach(img => {
        img.style.filter = "grayscale(100%)"
     })
    }
}

document.querySelector(".js-grayscaleToggle").addEventListener("click", function() {
    document.querySelectorAll(".photo-card img").forEach(img => {
        img.style.filter = this.checked ? "grayscale(100%)" : "none";
    });
});




