const URL = "https://picsum.photos/v2/list?limit=4";

export async function fetchFourPhotos() {
  const page = Math.floor(Math.random() * 100) + 1;   
  const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`);
  const list = await res.json();
  return list.map(item => ({
    id: Number(item.id),
    name: item.author || "Unknown",
    link: item.url || `https://picsum.photos/id/${item.id}`,
    src: `https://picsum.photos/id/${item.id}/600/400`,
  }));
}

