import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.144.84.50/api',
});

export const getAllReviews = () => api.get('/reviews');

const apis = {
  getAllReviews,
};

export default apis;
