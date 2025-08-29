export const dummyData = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: `${i}`,
    author: `Author ${i + 1}`,
    width: 5616,
    height: 3744,
    url: `https://unsplash.com/photos/random${i}`,
    download_url: `https://picsum.photos/id/${i}/400/300`,
  }))
];