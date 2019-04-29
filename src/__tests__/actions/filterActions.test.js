import configureStore from 'redux-mock-store';
import * as filterActions from '../../js/redux/actions/filterActions';
import { NEXT_LIST, PREVIOUS_LIST } from '../../js/constants/actionTypes';

const mockStore = configureStore();
const store = mockStore();

describe('filterActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('nextFilterList action', () => {
    const expectedActions = [
      {
        type: NEXT_LIST,
      },
    ];

    store.dispatch(filterActions.nextFilterList());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('previousFilterList action', () => {
    const expectedActions = [
      {
        type: PREVIOUS_LIST,
      },
    ];

    store.dispatch(filterActions.previousFilterList());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
