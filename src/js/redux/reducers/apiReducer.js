import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  SEARCH_SOURCE,
  SEARCH_REQUEST,
} from '../../constants';

const initialState = {
  loading: false,
  error: null,
};

const apiState = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, loading: true, error: null };
    case SEARCH_SOURCE:
      return { ...state, loading: true, error: null };
    case SEARCH_REQUEST:
      return { ...state, loading: true, error: null };
    case API_CALL_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case API_CALL_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default apiState;
