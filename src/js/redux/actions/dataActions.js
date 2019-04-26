import { SET_PRIMARY_DATA, LOAD_MORE_NEWS } from '../../constants';

export const setPrimaryData = (data, sources) => ({
  type: SET_PRIMARY_DATA,
  payload: { data, sources },
});

export const loadMoreNews = () => ({
  type: LOAD_MORE_NEWS,
});
