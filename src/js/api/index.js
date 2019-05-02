import axios from 'axios';
import urlFactory from './urlFactory';

export const fetchAllData = () => axios.get(urlFactory.produceDefaultUrl());

export const fetchAllSources = () =>
  axios.get(urlFactory.produceDefaultSourcesUrl());

export const fetchBySource = source =>
  axios.get(urlFactory.produceUrlBySource(source));

export const fetchByQuery = query =>
  axios.get(urlFactory.produceUrlByQuery(query));
