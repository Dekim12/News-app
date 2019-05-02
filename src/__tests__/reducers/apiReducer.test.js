import apiState from '../../js/redux/reducers';
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  SEARCH_SOURCE,
  SEARCH_REQUEST,
} from '../../js/constants';

describe('INITIAL_STATE', () => {
  it('is correct', () => {
    const action = { type: 'NON_EXISTENT_ACTION' };
    const initialState = {
      loading: false,
      error: null,
    };

    expect(apiState(undefined, action).apiState).toEqual(initialState);
  });
});

describe('API_CALL_REQUEST', () => {
  it('returns the correct state after API_CALL_REQUEST action', () => {
    const action = { type: API_CALL_REQUEST };
    const expectedState = { loading: true, error: null };

    expect(apiState(undefined, action).apiState).toEqual(expectedState);
  });
});

describe('SEARCH_SOURCE', () => {
  const source = 'bbc-news';
  it('returns the correct state after SEARCH_SOURCE action', () => {
    const action = { type: SEARCH_SOURCE, payload: source };
    const expectedState = { loading: true, error: null };

    expect(apiState(undefined, action).apiState).toEqual(expectedState);
  });
});

describe('SEARCH_REQUEST', () => {
  const query = 'news';

  it('returns the correct state after SEARCH_REQUEST action', () => {
    const action = { type: SEARCH_REQUEST, payload: query };
    const expectedState = { loading: true, error: null };

    expect(apiState(undefined, action).apiState).toEqual(expectedState);
  });
});

describe('API_CALL_FAILURE', () => {
  const error = { statusCode: 404 };

  it('returns the correct state after API_CALL_FAILURE action', () => {
    const action = { type: API_CALL_FAILURE, payload: error };
    const expectedState = { loading: false, error };

    expect(apiState(undefined, action).apiState).toEqual(expectedState);
  });
});

describe('API_CALL_SUCCESS', () => {
  it('returns the correct state after API_CALL_SUCCESS action', () => {
    const action = { type: API_CALL_SUCCESS };
    const expectedState = { loading: false, error: null };

    expect(apiState(undefined, action).apiState).toEqual(expectedState);
  });
});
