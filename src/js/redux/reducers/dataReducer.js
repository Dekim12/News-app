import {
  SET_PRIMARY_DATA,
  MIN_QUANTITY_NEWS,
  LOAD_MORE_NEWS,
  SET_DATA,
} from '../../constants';

const initialState = {
  primaryData: null,
  sourcesList: null,
  quantityDisplayedNews: MIN_QUANTITY_NEWS,
};

const dataState = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRIMARY_DATA:
      return {
        primaryData: action.payload.data,
        sourcesList: action.payload.sources,
        quantityDisplayedNews: MIN_QUANTITY_NEWS,
      };
    case LOAD_MORE_NEWS:
      return {
        ...state,
        quantityDisplayedNews: state.quantityDisplayedNews + MIN_QUANTITY_NEWS,
      };
    case SET_DATA:
      return {
        ...state,
        primaryData: action.payload,
        quantityDisplayedNews: MIN_QUANTITY_NEWS,
      };
    default:
      return state;
  }
};

export default dataState;
