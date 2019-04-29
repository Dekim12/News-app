import urlFactory from '../js/api/urlFactory';

const defaultUrl =
  'https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey=5b7303c0e19441d99b2b51502198f306';
const defaultSourcesUrl =
  'https://newsapi.org/v2/sources?apiKey=5b7303c0e19441d99b2b51502198f306';
const query = 'news';
const urlByQuery = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=5b7303c0e19441d99b2b51502198f306`;
const source = 'bbc-news';
const urlBySource = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=5b7303c0e19441d99b2b51502198f306`;

it('get default url', () => {
  expect(urlFactory.produceDefaultUrl()).toEqual(defaultUrl);
});

it('get default sources url', () => {
  expect(urlFactory.produceDefaultSourcesUrl()).toEqual(defaultSourcesUrl);
});

it('get url by query', () => {
  expect(urlFactory.produceUrlByQuery(query)).toEqual(urlByQuery);
});

it('get url by source', () => {
  expect(urlFactory.produceUrlBySource(source)).toEqual(urlBySource);
});
