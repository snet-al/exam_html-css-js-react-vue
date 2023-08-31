export const fetchRandomImages = (pageNumber, limit = 4) => {
  return fetch(
    `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching photos:", error);
    });
};

