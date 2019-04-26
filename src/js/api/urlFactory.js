const API_KEY = '5b7303c0e19441d99b2b51502198f306';

const urlFactory = {
  produceDefaultUrl: () =>
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey=${API_KEY}`,
  produceDefaultSourcesUrl: () =>
    `https://newsapi.org/v2/sources?apiKey=${API_KEY}`,
  produceUrlByQuery: query =>
    `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}`,
  produceUrlBySource: source =>
    `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`,
};

export default urlFactory;
