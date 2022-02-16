import axios from 'axios';

const api = axios.create({
  baseURL: 'http://8804-186-235-184-179.ngrok.io',
});

export default api;
