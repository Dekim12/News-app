import { SET_PRIMARY_DATA } from '../../constants';

export const setPrimaryData = data => ({
  type: SET_PRIMARY_DATA,
  payload: data,
});
