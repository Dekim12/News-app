import configureStore from 'redux-mock-store';
import * as apiActions from '../../js/redux/actions/apiActions';
import * as apiActionsTypes from '../../js/constants/actionTypes';

const mockStore = configureStore();
const store = mockStore();

describe('apiActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('callRequest action', () => {
    const expectedActions = [
      {
        type: apiActionsTypes.API_CALL_REQUEST,
      },
    ];

    store.dispatch(apiActions.callRequest());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('requestPassedSuccessfully action', () => {
    const expectedActions = [
      {
        type: apiActionsTypes.API_CALL_SUCCESS,
      },
    ];

    store.dispatch(apiActions.requestPassedSuccessfully());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('requestFailed action', () => {
    const expectedActions = [
      {
        type: apiActionsTypes.API_CALL_FAILURE,
        payload: 'Error',
      },
    ];

    store.dispatch(apiActions.requestFailed('Error'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('searchRequest action', () => {
    const expectedActions = [
      {
        type: apiActionsTypes.SEARCH_REQUEST,
        payload: 'news',
      },
    ];

    store.dispatch(apiActions.searchRequest('news'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('searchSource action', () => {
    const expectedActions = [
      {
        type: apiActionsTypes.SEARCH_SOURCE,
        payload: 'bbc-news',
      },
    ];

    store.dispatch(apiActions.searchSource('bbc-news'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
