export const fetchPhotos = (pageNumber, photoLimit, setPhotos) => {
  return fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${4}`)
    .then((response) => response.json())
    .then((data) => {
      setPhotos(data);
    })
    .catch((error) => {
      console.error("Error fetching photos:", error);
      throw error;
    });
};
