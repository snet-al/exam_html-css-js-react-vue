export default function getRandomPhotos(photos,count) {
    
    const randomItemList = [];
    while (randomItemList.length < count) {
        const randNumber = Math.floor(Math.random() * photos.length);
        if (!randomItemList.includes(randNumber)) randomItemList.push(randNumber);
    }

    return photos.filter((photo) => randomItemList.includes(Number(photo.id)));
}