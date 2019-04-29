import filterState from '../../js/redux/reducers';
import { NEXT_LIST, PREVIOUS_LIST } from '../../js/constants';

describe('INITIAL_STATE', () => {
  it('is correct', () => {
    const action = { type: 'NON_EXISTENT_ACTION' };
    const initialState = {
      listNumber: 0,
    };

    expect(filterState(undefined, action).filterState).toEqual(initialState);
  });
});

describe('NEXT_LIST', () => {
  it('returns the correct state after NEXT_LIST action', () => {
    const action = { type: NEXT_LIST };
    const expectedState = {
      listNumber: 1,
    };

    expect(filterState(undefined, action).filterState).toEqual(expectedState);
  });
});

describe('PREVIOUS_LIST', () => {
  it('returns the correct state after PREVIOUS_LIST action', () => {
    const action = { type: PREVIOUS_LIST };
    const expectedState = {
      listNumber: -1,
    };

    expect(filterState(undefined, action).filterState).toEqual(expectedState);
  });
});
