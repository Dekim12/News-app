import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Search } from '../../components';
import { searchRequest, callRequest } from '../actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchRequest,
      callRequest,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Search);
