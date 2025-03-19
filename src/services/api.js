export const fetchPhotos = async() => {
    const photos = [];
    for (let i = 0; i < 4; i++) {
        const width = Math.floor(Math.random() * 500) + 300;
        const height = Math.floor(Math.random() * 500) + 300;
        const src = `https://picsum.photos/${width}/${height}`;
        photos.push({ id: i + 1, src, alt: `Photo ${i + 1}` });
    }
    return photos;
};