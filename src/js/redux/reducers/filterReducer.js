import { NEXT_LIST, PREVIOUS_LIST } from '../../constants';

const initialState = {
  listNumber: 0,
};

const filterState = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_LIST:
      return {
        ...state,
        listNumber: state.listNumber + 1,
      };
    case PREVIOUS_LIST:
      return {
        ...state,
        listNumber: state.listNumber - 1,
      };
    default:
      return state;
  }
};

export default filterState;
