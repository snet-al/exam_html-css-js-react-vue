const getImages = async () => {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    const request = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    if (request.length === 0) {
      throw new Error("No images found");
    }

    return request;
  } catch (error) {
    console.error("Error fetching image:", error);
    return error.message;
  }
};

export default getImages;
