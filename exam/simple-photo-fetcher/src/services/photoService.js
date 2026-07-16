const PHOTO_API_URL = (page) =>
  `https://picsum.photos/v2/list?page=${page}&limit=4`;

export async function fetchPhotos() {
  const page = Math.floor(Math.random() * 10) + 1;
  const response = await fetch(PHOTO_API_URL(page));
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await response.json();
  return data;
}



