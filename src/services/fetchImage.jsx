export const fetchImages = async (pageNumber) => {
    const LIMIT = 4;
    try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${LIMIT}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
  };