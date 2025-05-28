export default function getRandomPhotos(photos, count, alreadySelected = []) {

    const alreadySelectedIds = new Set(alreadySelected.map(photo => photo.id));
    const availablePhotos = photos.filter(photo => !alreadySelectedIds.has(photo.id));

    if (availablePhotos.length === 0) return []
    
    const randomIndexSet = new Set();
    while (randomIndexSet.size < count && randomIndexSet.size < availablePhotos.length) {
        const randIndex = Math.floor(Math.random() * availablePhotos.length);
        randomIndexSet.add(randIndex);
    }

    return Array.from(randomIndexSet).map(index => availablePhotos[index]);
}