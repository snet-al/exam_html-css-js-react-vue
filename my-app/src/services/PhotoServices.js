export const fetchPhotos = async () => {
  const apiUrl = `https://picsum.photos/v2/list`;

  try {
    const data = await fetch(apiUrl);
    return await data.json();
  } catch (err) {
    console.log("Data not fetched", err);
  }
};
