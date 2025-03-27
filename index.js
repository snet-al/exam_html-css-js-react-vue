const fetchPhotos = async () => {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${
        Math.floor(Math.random() * 100) + 1
      }&limit=4`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const cardContainer = document.querySelector(".card-container");

    data.forEach((photo) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
          <img src="${photo.download_url}" alt="${photo.author}" />
          <div class="card-info">
            <h3>${photo.author}</h3>
            <a href="${photo.url}" target="_blank">${photo.url}</a>
          </div>
        `;

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
};
const toggleSwitch = document.querySelector("#toggle-switch");
toggleSwitch.addEventListener("change", () => {
  const cardContainer = document.querySelector(".card-container");
  if (toggleSwitch.checked) {
    cardContainer.classList.add("grayscale");
  } else {
    cardContainer.classList.remove("grayscale");
  }
});
fetchPhotos();

const fetchNewPhotosButton = document.querySelector(".fetch-btn");
fetchNewPhotosButton.addEventListener("click", () => {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";
  fetchPhotos();
});

const footerButton = document.querySelector(".footer-btn");
footerButton.addEventListener("click", fetchPhotos);
