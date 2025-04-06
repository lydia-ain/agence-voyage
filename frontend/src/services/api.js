// src/services/api.js

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api', // Assurez-vous que l'URL correspond à votre backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
