import {
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  API_CALL_REQUEST,
} from '../../constants';

export const callRequest = () => ({ type: API_CALL_REQUEST });

export const requestPassedSuccessfully = () => ({ type: API_CALL_SUCCESS });

export const requestFailed = error => ({
  type: API_CALL_FAILURE,
  payload: error,
});
