import { searchRequestsSaga } from '../../js/redux/sagas/saga';
import recordSaga from '../../js/redux/sagas/sagaTestUtils';
import * as api from '../../js/api';
import {
  searchRequest,
  setData,
  requestPassedSuccessfully,
  requestFailed,
} from '../../js/redux/actions';

describe('testing sourceRequestsSaga', () => {
  const fakeDataList = {
    articles: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  };
  const searchQuery = 'news';
  const errorMessage = { statusCode: 404, message: 'Page Not Found' };

  api.fetchByQuery = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('if fetchByQuery requests completed successfully', async () => {
    api.fetchByQuery.mockImplementation(() => ({ data: fakeDataList }));

    const dispatched = await recordSaga(
      searchRequestsSaga,
      searchRequest(searchQuery)
    );

    expect(api.fetchByQuery).toHaveBeenCalled();
    expect(api.fetchByQuery).toHaveBeenCalledWith(searchQuery);
    expect(dispatched).toContainEqual(setData(fakeDataList.articles));
    expect(dispatched).toContainEqual(requestPassedSuccessfully());
  });

  it('if requests did not complete successfully', async () => {
    api.fetchByQuery.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    const dispatched = await recordSaga(
      searchRequestsSaga,
      searchRequest(searchQuery)
    );

    expect(api.fetchByQuery).toHaveBeenCalled();
    expect(api.fetchByQuery).toHaveBeenCalledWith(searchQuery);
    expect(dispatched).toContainEqual(requestFailed(new Error(errorMessage)));
  });
});
