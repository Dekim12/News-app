import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewsList } from '../../components';

const mapStateToProps = state => ({
  primaryData: state.dataState.primaryData,
  quantityNews: state.dataState.quantityDisplayedNews,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
