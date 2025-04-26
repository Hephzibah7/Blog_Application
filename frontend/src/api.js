// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: "https://blog-application-sb51.onrender.com",
  withCredentials: true,  // if you need cookies/auth
});

export default api;
