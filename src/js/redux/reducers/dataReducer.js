import { SET_PRIMARY_DATA } from '../../constants';

const initialState = {
  primaryData: null,
};

const dataState = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRIMARY_DATA:
      return { ...state, primaryData: action.payload };
    default:
      return state;
  }
};

export default dataState;
