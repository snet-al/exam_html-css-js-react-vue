document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".photo-gallery");
  const grayscaleBtn = document.querySelector("#grayscale-btn");
  const fetchBtn = document.querySelector("#fetch-btn");

  console.log("Elementet:", { gallery, grayscaleBtn, fetchBtn });

  if (grayscaleBtn && gallery) {
    grayscaleBtn.addEventListener("click", () => {
      gallery.classList.toggle("is-grayscale");
      const isGrayscale = gallery.classList.contains("is-grayscale");
      grayscaleBtn.textContent = isGrayscale
        ? "Remove grayscale"
        : "Make photos grayscale";
      console.log("Grayscale aktiv:", isGrayscale);
    });
  }

  function getRandomFourPhotos(photoList) {
    const copy = [...photoList];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, 4);
  }

  function renderPhotos(photos) {
    const cards = document.querySelectorAll(".photo-card");

    cards.forEach((card, index) => {
      const photo = photos[index];
      if (!photo) return;

      const img = card.querySelector("img");
      const authorEl = card.querySelector(".photo-author");
      const urlEl = card.querySelector(".photo-url");

      if (img) {
        img.src = `https://picsum.photos/id/${photo.id}/600/400`;
        img.alt = `Photo by ${photo.author}`;
      }

      if (authorEl) {
        authorEl.textContent = photo.author;
      }

      if (urlEl) {
        urlEl.href = photo.url;
        urlEl.textContent = photo.url;
      }
    });
  }

  async function fetchAndDisplayPhotos() {
    try {
      const randomPage = Math.floor(Math.random() * 10) + 1;
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${randomPage}&limit=30`
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const photos = await response.json();
      const randomFour = getRandomFourPhotos(photos);
      renderPhotos(randomFour);
    } catch (error) {
      console.error("Gabim te fetch:", error);
    }
  }

  if (fetchBtn) {
    fetchBtn.addEventListener("click", fetchAndDisplayPhotos);
  }
});