import {
  watcherSaga,
  searchRequestsSaga,
  sourceRequestsSaga,
  initialRequestsSaga,
} from '../../js/redux/sagas/saga';
import {
  API_CALL_REQUEST,
  SEARCH_SOURCE,
  SEARCH_REQUEST,
} from '../../js/constants';

describe('testing watcherSaga', () => {
  const watcherGenerator = watcherSaga();
  const listeners = {};
  for (const next of watcherGenerator) {
    const actionType = next.payload.args[0];
    const callbackSaga = next.payload.args[1];
    listeners[actionType] = callbackSaga;
  }

  it('check the existence initialRequestsSaga with the right action type', () => {
    expect(listeners).toHaveProperty(API_CALL_REQUEST, initialRequestsSaga);
    expect(listeners).toHaveProperty(SEARCH_SOURCE, sourceRequestsSaga);
    expect(listeners).toHaveProperty(SEARCH_REQUEST, searchRequestsSaga);
  });
});
