import {
  SET_PRIMARY_DATA,
  MIN_QUANTITY_NEWS,
  LOAD_MORE_NEWS,
} from '../../constants';

const initialState = {
  primaryData: null,
  quantityDisplayedNews: MIN_QUANTITY_NEWS,
};

const dataState = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRIMARY_DATA:
      return { ...state, primaryData: action.payload };
    case LOAD_MORE_NEWS:
      return {
        ...state,
        quantityDisplayedNews: state.quantityDisplayedNews + MIN_QUANTITY_NEWS,
      };
    default:
      return state;
  }
};

export default dataState;
