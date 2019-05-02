import { NEXT_LIST, PREVIOUS_LIST } from '../../constants';

export const nextFilterList = () => ({
  type: NEXT_LIST,
});

export const previousFilterList = () => ({
  type: PREVIOUS_LIST,
});
