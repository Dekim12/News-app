import dataState from '../../js/redux/reducers';
import {
  SET_PRIMARY_DATA,
  MIN_QUANTITY_NEWS,
  LOAD_MORE_NEWS,
  SET_DATA,
} from '../../js/constants';

const fakeData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const fakeSources = [
  { source: 1 },
  { source: 2 },
  { source: 3 },
  { source: 4 },
  { source: 5 },
];

describe('INITIAL_STATE', () => {
  it('is correct', () => {
    const action = { type: 'NON_EXISTENT_ACTION' };
    const initialState = {
      primaryData: null,
      sourcesList: null,
      quantityDisplayedNews: MIN_QUANTITY_NEWS,
    };

    expect(dataState(undefined, action).dataState).toEqual(initialState);
  });
});

describe('SET_PRIMARY_DATA', () => {
  it('returns the correct state after SET_PRIMARY_DATA action', () => {
    const action = {
      type: SET_PRIMARY_DATA,
      payload: { data: fakeData, sources: fakeSources },
    };
    const expectedState = {
      primaryData: fakeData,
      sourcesList: fakeSources,
      quantityDisplayedNews: MIN_QUANTITY_NEWS,
    };

    expect(dataState(undefined, action).dataState).toEqual(expectedState);
  });
});

describe('LOAD_MORE_NEWS', () => {
  it('returns the correct state after LOAD_MORE_NEWS action', () => {
    const action = {
      type: LOAD_MORE_NEWS,
    };
    const expectedState = {
      primaryData: null,
      sourcesList: null,
      quantityDisplayedNews: MIN_QUANTITY_NEWS + MIN_QUANTITY_NEWS,
    };

    expect(dataState(undefined, action).dataState).toEqual(expectedState);
  });
});

describe('SET_DATA', () => {
  it('returns the correct state after SET_DATA action', () => {
    const action = {
      type: SET_DATA,
      payload: fakeData,
    };
    const expectedState = {
      primaryData: fakeData,
      sourcesList: null,
      quantityDisplayedNews: MIN_QUANTITY_NEWS,
    };

    expect(dataState(undefined, action).dataState).toEqual(expectedState);
  });
});
