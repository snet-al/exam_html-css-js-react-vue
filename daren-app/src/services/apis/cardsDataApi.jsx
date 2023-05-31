import axios from "axios"

const CardsDataApi = async() => {
    try {
        const response = await axios.get('https://picsum.photos/200/200');
        return response.request.responseURL;
      } catch (error) {
        console.error('Error fetching image:', error);
      }
}

export default CardsDataApi;