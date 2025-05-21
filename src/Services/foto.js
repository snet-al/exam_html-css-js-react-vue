export async function fetchPhotos(limit = 4) {
  const page = Math.floor(Math.random() * 100);
  const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data.map((img) => ({
      src: `https://picsum.photos/id/${img.id}/200/300?random=${Math.random()}`,
      link: img.url,
      author: img.author,
    }));
  } catch (err) {
    console.error("Failed to fetch photos:", err);
    throw err;
  }
}
