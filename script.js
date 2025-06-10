const gallery = document.getElementById("gallery");
const fetchBtn = document.getElementById("fetch-btn");
const loadMoreBtn = document.getElementById("load-more-btn");
const grayscaleToggle = document.getElementById("grayscaleToggle");

async function loadPhotos(count, reset = false) {
  if (reset) gallery.innerHTML = "";

  const promises = Array.from({ length: count }, async () => {
    const response = await fetch("https://picsum.photos/300");
    return response.url;
  });

  const urls = await Promise.all(promises);

  gallery.innerHTML = reset ? "" : gallery.innerHTML;

  for (const imageURL of urls) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = imageURL;

    const caption = document.createElement("div");
    caption.className = "caption";
    caption.innerText = "Random Photo\nhttps://picsum.photos/";

    card.appendChild(img);
    card.appendChild(caption);
    gallery.appendChild(card);
  }

  applyGrayscale();
}

function applyGrayscale() {
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img) => {
    img.style.filter = grayscaleToggle.checked ? "grayscale(100%)" : "none";
  });
}

fetchBtn.addEventListener("click", () => loadPhotos(4, true));
loadMoreBtn.addEventListener("click", () => loadPhotos(4, false));
grayscaleToggle.addEventListener("change", applyGrayscale);

loadPhotos(4, true);
