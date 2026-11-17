import axios from "axios";

const fetchPhoto = (page = 1, limit = 4) => {
    return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((res) => {
        return res.data;
    })
    .catch((error) => {
        console.log("Error...", error);
        return [];
    });
};

export default fetchPhoto;
