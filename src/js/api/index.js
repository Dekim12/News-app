import axios from 'axios';

const API_KEY = '5b7303c0e19441d99b2b51502198f306';

export const fetchData = () =>
  axios.get(
    'https://newsapi.org/v2/sources?category=business&apiKey=5b7303c0e19441d99b2b51502198f306'
  );
// 'https://newsapi.org/v2/sources?source=abc-news&apiKey=5b7303c0e19441d99b2b51502198f306'
