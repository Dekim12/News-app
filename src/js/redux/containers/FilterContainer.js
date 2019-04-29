import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Filter } from '../../components';
import { nextFilterList, previousFilterList, searchSource } from '../actions';
import { MAX_COUNT_ITEMS } from '../../constants';

const mapStateToProps = state => ({
  sourcesList: state.dataState.sourcesList,
  listNumber: state.filterState.listNumber,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      nextFilterList,
      previousFilterList,
      searchSource,
    },
    dispatch
  );

const mergeProps = (stateProps, dispatchProps) => {
  const { sourcesList, listNumber } = stateProps;

  const sourcesExist = !(!sourcesList || !sourcesList.length);

  if (!sourcesExist) {
    return { sourcesExist };
  }

  const isNotLastList = (list = [], number) => {
    const maxCount = number * MAX_COUNT_ITEMS + MAX_COUNT_ITEMS;
    if (maxCount < list.length) {
      return true;
    }
    return null;
  };

  const selectSources = (list = [], number) => {
    const startValue = number * MAX_COUNT_ITEMS;

    if (!Array.isArray(list)) {
      return [];
    }

    const currentList = list.slice(startValue, startValue + MAX_COUNT_ITEMS);

    if (number > 0 && currentList.length < MAX_COUNT_ITEMS) {
      return list.slice(-MAX_COUNT_ITEMS);
    }
    return currentList;
  };

  return {
    ...dispatchProps,
    sourcesExist,
    listNumber,
    lastList: isNotLastList(sourcesList, listNumber),
    sourcesList: selectSources(sourcesList, listNumber),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Filter);
