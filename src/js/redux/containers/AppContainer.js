import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { App } from '../../components';
import { callRequest } from '../actions/apiActions';

const mapStateToProps = state => ({
  loading: state.apiState.loading,
  error: state.apiState.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      callRequest,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
