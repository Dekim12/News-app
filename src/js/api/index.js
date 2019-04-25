import axios from 'axios';

const API_KEY = '5b7303c0e19441d99b2b51502198f306';

export const fetchData = () =>
  axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey=${API_KEY}`
  );

export const fetchSources = () =>
  axios.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`);
