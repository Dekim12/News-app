import { MAX_QUANTITY_NEWS } from '../constants';

export const isMoreDataExist = (dataCount, quantity) =>
  dataCount > quantity && quantity < MAX_QUANTITY_NEWS;
