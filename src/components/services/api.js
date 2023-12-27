import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38851235-fece57cae64207e00960770f9';

const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
});

export const fetchImagesWithQuery = async(searchQuery, page) => {
  const { data }= await axios.get(
        `${BASE_URL}?q=${searchQuery}&page=${page}&${ searchParams }`
    );
    return data;
}
