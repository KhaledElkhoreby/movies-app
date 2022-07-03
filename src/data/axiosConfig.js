import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'f7cdf21da0fb8d6e597eab3306314756',
  },
});
export default axiosInstance;
