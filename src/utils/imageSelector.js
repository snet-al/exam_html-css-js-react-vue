export function remainingImages(images= [], dummyData) {
  const usedIds = new Set(images.map(img => img.id));
  const remaining = dummyData.filter(img => !usedIds.has(img.id));
  return remaining;
}
export function selectRandomImages(remaining ) {
    const shuffled = [...remaining].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);
    return selected;
}
export function fetchNewPhotos(images, dummyData) {
  {
    const remaining = remainingImages(images, dummyData);
    let selected = [];
    if (remaining.length === 0) 
      return selected = selectRandomImages(dummyData);
    else
      return selected = selectRandomImages(remaining);
  }
}

export function morePhotos(images, dummyData) {
  const remaining = remainingImages(images, dummyData);
  if (remaining.length === 0) return;
  const selected = selectRandomImages(remaining);
  return [...images, ...selected];
}
