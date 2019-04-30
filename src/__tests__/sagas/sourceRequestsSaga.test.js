import { sourceRequestsSaga } from '../../js/redux/sagas/saga';
import recordSaga from '../../js/redux/sagas/sagaTestUtils';
import * as api from '../../js/api';
import {
  searchSource,
  setData,
  requestPassedSuccessfully,
  requestFailed,
} from '../../js/redux/actions';

describe('testing sourceRequestsSaga', () => {
  const fakeDataList = {
    articles: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  };
  const sourceName = 'bbc-news';
  const errorMessage = { statusCode: 404, message: 'Page Not Found' };

  api.fetchBySource = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('if fetchBySource requests completed successfully', async () => {
    api.fetchBySource.mockImplementation(() => ({ data: fakeDataList }));

    const dispatched = await recordSaga(
      sourceRequestsSaga,
      searchSource(sourceName)
    );

    expect(api.fetchBySource).toHaveBeenCalled();
    expect(api.fetchBySource).toHaveBeenCalledWith(sourceName);
    expect(dispatched).toContainEqual(setData(fakeDataList.articles));
    expect(dispatched).toContainEqual(requestPassedSuccessfully());
  });

  it('if requests did not complete successfully', async () => {
    api.fetchBySource.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    const dispatched = await recordSaga(
      sourceRequestsSaga,
      searchSource(sourceName)
    );

    expect(api.fetchBySource).toHaveBeenCalled();
    expect(api.fetchBySource).toHaveBeenCalledWith(sourceName);
    expect(dispatched).toContainEqual(requestFailed(new Error(errorMessage)));
  });
});
