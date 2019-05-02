import { SET_PRIMARY_DATA, LOAD_MORE_NEWS, SET_DATA } from '../../constants';

export const setPrimaryData = (data, sources) => ({
  type: SET_PRIMARY_DATA,
  payload: { data, sources },
});

export const loadMoreNews = () => ({
  type: LOAD_MORE_NEWS,
});

export const setData = data => {
  return { type: SET_DATA, payload: data };
};
