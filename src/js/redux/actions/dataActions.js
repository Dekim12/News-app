import { SET_PRIMARY_DATA, LOAD_MORE_NEWS } from '../../constants';

export const setPrimaryData = data => ({
  type: SET_PRIMARY_DATA,
  payload: data,
});

export const loadMoreNews = () => ({
  type: LOAD_MORE_NEWS,
});
