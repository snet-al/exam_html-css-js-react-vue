export const fetchRandomImages = async (count) => {
  try {
    const response = await fetch(`https://picsum.photos/v2/list`);
    const data = await response.json();

    if (response.ok) {
      const shuffledData = shuffle(data);
      const shuffledImages = shuffledData.slice(0, count);
      return shuffledImages;
    } else {
      throw new Error('Failed to fetch images');
    }
  } catch (error) {
    throw new Error(`Error while fetching images: ${error}`);
  }
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
