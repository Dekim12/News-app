import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Filter } from '../../components';
import { nextFilterList, previousFilterList } from '../actions';

const mapStateToProps = state => ({
  sourcesList: state.dataState.sourcesList,
  listNumber: state.filterState.listNumber,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      nextFilterList,
      previousFilterList,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
