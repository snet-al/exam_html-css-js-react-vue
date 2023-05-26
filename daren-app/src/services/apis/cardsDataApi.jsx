import axios from 'axios';

const cardsDataApi = async (width,height) => {
  try {
    const response = await axios.get(`https://picsum.photos/${width}/${height}`);
    return response.request.responseURL;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
};

export default cardsDataApi;
