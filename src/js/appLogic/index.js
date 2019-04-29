import { MAX_QUANTITY_NEWS, MAX_COUNT_ITEMS } from '../constants';

export const isMoreDataExist = (dataCount, quantity) =>
  dataCount > quantity && quantity < MAX_QUANTITY_NEWS;

export const prepareAuthorName = name => {
  if (typeof name !== 'string') {
    return 'unknown';
  }

  const wordsCount = 3;
  const preparedName = name.split(' ');

  if (preparedName.length > wordsCount) {
    return preparedName
      .slice(0, wordsCount)
      .join(' ')
      .concat('...');
  }
  return preparedName.slice(0, wordsCount).join(' ');
};

export const selectSources = (list = [], number) => {
  const startValue = number * MAX_COUNT_ITEMS;

  if (!Array.isArray(list)) {
    return [];
  }
  return list.slice(startValue, startValue + MAX_COUNT_ITEMS);
};

export const isNotLastList = (list = [], number) => {
  const maxCount = number * MAX_COUNT_ITEMS + MAX_COUNT_ITEMS;
  if (maxCount < list.length) {
    return true;
  }
  return null;
};
