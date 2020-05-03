import axios from 'axios';

const api = axios.create({
  baseURL: 'http://52.53.209.190/api',
});

export const getAllReviews = () => api.get('/reviews');

const apis = {
  getAllReviews,
};

export default apis;
