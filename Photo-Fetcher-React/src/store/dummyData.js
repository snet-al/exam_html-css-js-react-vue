// Initial static data
export const dummyPhotos = [
  {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5000/3333"
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5000/3333"
  },
  {
    id: "2",
    author: "Paul Jarvis",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/6J--NXulQCs",
    download_url: "https://picsum.photos/id/2/5000/3333"
  },
  {
    id: "3",
    author: "Tina Rataj",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/pwaaqfoMibI",
    download_url: "https://picsum.photos/id/3/5000/3333"
  }
];

// Function to fetch photos
export const fetchPhotos = async (limit = 4) => {
  try {
    const page = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
