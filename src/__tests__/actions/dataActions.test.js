import configureStore from 'redux-mock-store';
import * as dataActions from '../../js/redux/actions/dataActions';
import * as dataActionsTypes from '../../js/constants/actionTypes';

const mockStore = configureStore();
const store = mockStore();

describe('dataActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('setPrimaryData action', () => {
    const expectedActions = [
      {
        type: dataActionsTypes.SET_PRIMARY_DATA,
        payload: { data: 'news', sources: 'bbc-news' },
      },
    ];

    store.dispatch(dataActions.setPrimaryData('news', 'bbc-news'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('loadMoreNews action', () => {
    const expectedActions = [
      {
        type: dataActionsTypes.LOAD_MORE_NEWS,
      },
    ];

    store.dispatch(dataActions.loadMoreNews());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('setData action', () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const expectedActions = [
      {
        type: dataActionsTypes.SET_DATA,
        payload: data,
      },
    ];

    store.dispatch(dataActions.setData(data));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
