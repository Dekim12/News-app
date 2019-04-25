import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewsList } from '../../components';
import { loadMoreNews } from '../actions';

const mapStateToProps = state => ({
  primaryData: state.dataState.primaryData,
  quantityNews: state.dataState.quantityDisplayedNews,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadMoreNews,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
