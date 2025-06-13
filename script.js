const gallery = document.getElementById("gallerySection");
const fetchBtn = document.getElementById("fetchBtn");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const grayscaleToggle = document.getElementById("grayscaleToggle");

async function fetchPhotos(count) {
  try {
    const photoPromises = Array.from({ length: count }, async () => {
      const response = await fetch("https://picsum.photos/300");
      if (!response.ok) {
        throw new Error(`Failed to fetch photo: ${response.status}`);
      }
      return response.url;
    });

    const photoUrls = await Promise.all(photoPromises);
    return photoUrls;
  } catch (error) {
    console.error("Error fetching photos:", error);
    alert("There was a problem fetching photos. Please try again later.");
    return [];
  }
}

async function loadInitialPhotos(count) {
  gallery.innerHTML = ""; 

  const photoUrls = await fetchPhotos(count);
  addPhotosToGallery(photoUrls);
  applyGrayscale();
}

async function loadMorePhotos(count) {
  const photoUrls = await fetchPhotos(count);
  addPhotosToGallery(photoUrls);
  applyGrayscale();
}

function addPhotosToGallery(photoUrls) {
  for (const imageURL of photoUrls) {
    const card = document.createElement("div");
    card.className = "photoCard";

    const img = document.createElement("img");
    img.src = imageURL;

    const caption = document.createElement("div");
    caption.className = "captionText";
    caption.innerText = "Random Photo\nhttps://picsum.photos/";

    card.appendChild(img);
    card.appendChild(caption);
    gallery.appendChild(card);
  }
}

function applyGrayscale() {
  const images = document.querySelectorAll(".photoCard img");
  images.forEach((img) => {
    img.style.filter = grayscaleToggle.checked ? "grayscale(100%)" : "none";
  });
}

fetchBtn.addEventListener("click", () => loadInitialPhotos(4));
loadMoreBtn.addEventListener("click", () => loadMorePhotos(4));
grayscaleToggle.addEventListener("change", applyGrayscale);

loadInitialPhotos(4);
