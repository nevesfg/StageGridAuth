import axios from 'axios';

const http = axios.create({
  baseURL: 'http://89.117.75.69:8882/api/',
  headers: {
    'Content-Type': 'application/json',
    // Adicionar o token só se estiver disponível
    ...(localStorage.getItem('token') && { 'Authorization': `Token ${localStorage.getItem('token')}` }),
  }
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default http;