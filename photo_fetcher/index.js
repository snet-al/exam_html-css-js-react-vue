const createImageItem = (photo) => {
    const photoItem = document.createElement("article");
    photoItem.classList.add("photo-item");

    photoItem.innerHTML = `
        <img src="${photo.download_url}" alt="${photo.author}" class="placeholder" loading="lazy" />
        <figcaption style="display: none">
            <h3>${photo.author}</h3>
            <a href="${photo.url}" target="_blank">${photo.url}</a>
        </figcaption>
    `;

    const img = photoItem.querySelector("img");
    const figcaption = photoItem.querySelector("figcaption");

    img.addEventListener("load", () => {
        img.classList.remove("placeholder");
        figcaption.style.display = "block";
    });

    return photoItem;
};

const displayImages = (photos, gallery) => {
    photos.forEach((photo) => {
        const photoItem = createImageItem(photo);
        gallery.appendChild(photoItem);
    });

    toggleGrayscale(document.getElementById("toggle-switch"));
}

const fetchPhotos = async () => {
    try {
        const response = await fetch(
            `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100) + 1}&limit=4`
        );
        if (!response.ok) throw new Error(`Error Status: ${response.status}`);

        const photos = await response.json();

        return photos;

    } catch (error) {
        console.error("Error fetching photos:", error);
    }
};

const toggleGrayscale = function (toggleSwitch) {
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
        if (toggleSwitch.checked) {
            img.classList.add("grayscale");
        } else {
            img.classList.remove("grayscale");
        }
    });
}

const showNewPhotos = async () => {
    const photos = await fetchPhotos();

    const section = document.getElementById("photo-gallery");
    section.innerHTML = '';

    displayImages(photos, section);
}

const fetchMorePhotos = async () => {
    const photos = await fetchPhotos();

    displayImages(photos, document.getElementById("photo-gallery"));
};

showNewPhotos();

document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetch-photos");
    const toggleSwitch = document.getElementById("toggle-switch");
    const fetchMoreButton = document.getElementById("fetch-more-photos");

    fetchButton.addEventListener("click", showNewPhotos);
    toggleSwitch.addEventListener("change", () => toggleGrayscale(toggleSwitch));
    fetchMoreButton.addEventListener("click", fetchMorePhotos);
});