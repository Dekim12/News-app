import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Search } from '../../components';
import { searchRequest } from '../actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchRequest,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Search);
