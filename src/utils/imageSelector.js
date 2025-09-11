export function remainingImages(images = [], dummyData) {
  const usedIds = new Set(images.map((img) => img.id));
  return dummyData.filter((img) => !usedIds.has(img.id));
}
//ben select 4 foto random
export function selectRandomImages(images, count = 4) {
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// ben fetch foto mundesisht pa i perseritur. Nqs cdo photo eshte bere fetch
// athere do i reperdor fotot
export function selectNewPhotos(images, dummyData) {
  const remaining = remainingImages(images, dummyData);
  return remaining.length === 0
    ? selectRandomImages(dummyData)
    : selectRandomImages(remaining);
}

// i bashkengjit 4 foto
export function morePhotos(images, dummyData) {
  const remaining = remainingImages(images, dummyData);
  if (remaining.length === 0) return images;
  const selected = selectRandomImages(remaining);
  return [...images, ...selected];
}
