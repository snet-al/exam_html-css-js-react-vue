function pickUniqueRandom(items, count) {
  const copy = [...items];
  const picked = [];

  while (picked.length < count && copy.length > 0) {
    const idx = Math.floor(Math.random() * copy.length);
    picked.push(copy.splice(idx, 1)[0]);
  }

  return picked;
}

export async function fetchRandomPhotos(count = 4) {
  const res = await fetch("https://picsum.photos/v2/list?page=1&limit=100");

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  const list = await res.json();
  const picked = pickUniqueRandom(list, Math.min(count, list.length));
  const stamp = Date.now();

  return picked.map((p, index) => ({
    id: `${p.id}-${stamp}-${index}`,
    picsumId: p.id,
    author: p.author,
    pageUrl: p.url,
    download_url: `https://picsum.photos/id/${p.id}/800/600?random=${stamp}-${index}`,
  }));
}