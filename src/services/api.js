export const fetchPhotos = async () => {
   const imageList = [];
   for (let i = 0; i < 4; i++) {
       const width = Math.floor(Math.random() * 500) + 300;
       const height = Math.floor(Math.random() * 500) + 300;
       const src = `https://picsum.photos/${width}/${height}`;
       imageList.push({ id: i + 1, src, alt: `Random Photo ${i + 1}` });
   }
   return imageList;
};