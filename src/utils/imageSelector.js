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