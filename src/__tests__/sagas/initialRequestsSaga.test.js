import { initialRequestsSaga } from '../../js/redux/sagas/saga';
import recordSaga from '../../js/redux/sagas/sagaTestUtils';
import * as api from '../../js/api';
import {
  callRequest,
  requestPassedSuccessfully,
  setPrimaryData,
  requestFailed,
} from '../../js/redux/actions';

describe('testing initialRequestsSaga', () => {
  const fakeDataList = {
    articles: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  };
  const fakeSourcesList = {
    sources: [
      { source: 1 },
      { source: 2 },
      { source: 3 },
      { source: 4 },
      { source: 5 },
    ],
  };
  const errorMessage = { statusCode: 404, message: 'Page Not Found' };

  api.fetchAllData = jest.fn();
  api.fetchAllSources = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('if all requests completed successfully', async () => {
    api.fetchAllData.mockImplementation(() => ({ data: fakeDataList }));
    api.fetchAllSources.mockImplementation(() => ({ data: fakeSourcesList }));

    const dispatched = await recordSaga(initialRequestsSaga, callRequest);

    expect(api.fetchAllData).toHaveBeenCalled();
    expect(api.fetchAllSources).toHaveBeenCalled();
    expect(dispatched).toContainEqual(
      setPrimaryData(fakeDataList.articles, fakeSourcesList.sources)
    );
    expect(dispatched).toContainEqual(requestPassedSuccessfully());
  });

  it('if only fetchAllData request completed successfully', async () => {
    api.fetchAllData.mockImplementation(() => ({ data: fakeDataList }));
    api.fetchAllSources.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    const dispatched = await recordSaga(initialRequestsSaga, callRequest);

    expect(api.fetchAllData).toHaveBeenCalled();
    expect(api.fetchAllSources).toHaveBeenCalled();
    expect(dispatched).toContainEqual(requestFailed(new Error(errorMessage)));
  });

  it('if only fetchAllSources request completed successfully', async () => {
    api.fetchAllData.mockImplementation(() => {
      throw new Error(errorMessage);
    });
    api.fetchAllSources.mockImplementation(() => ({ data: fakeSourcesList }));

    const dispatched = await recordSaga(initialRequestsSaga, callRequest);

    expect(api.fetchAllData).toHaveBeenCalled();
    expect(api.fetchAllSources).not.toHaveBeenCalled();
    expect(dispatched).toContainEqual(requestFailed(new Error(errorMessage)));
  });

  it('if no one request completed successfully', async () => {
    api.fetchAllData.mockImplementation(() => {
      throw new Error(errorMessage);
    });
    api.fetchAllSources.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    const dispatched = await recordSaga(initialRequestsSaga, callRequest);

    expect(api.fetchAllData).toHaveBeenCalled();
    expect(api.fetchAllSources).not.toHaveBeenCalled();
    expect(dispatched).toContainEqual(requestFailed(new Error(errorMessage)));
  });
});
