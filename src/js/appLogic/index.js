import { MAX_QUANTITY_NEWS } from '../constants';

export const isMoreDataExist = (dataCount, quantity) =>
  dataCount > quantity && quantity < MAX_QUANTITY_NEWS;

export const prepareAuthorName = name => {
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
