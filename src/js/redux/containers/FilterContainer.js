import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Filter } from '../../components';
import { nextFilterList, previousFilterList, searchSource } from '../actions';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
