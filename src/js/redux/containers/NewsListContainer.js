import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewsList } from '../../components';
import { loadMoreNews } from '../actions';
import { MAX_QUANTITY_NEWS } from '../../constants';

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

const mergeProps = (stateProps, dispatchProps) => {
  const isMoreDataExist = (dataCount, quantity) =>
    dataCount > quantity && quantity < MAX_QUANTITY_NEWS;

  const { primaryData, quantityNews } = stateProps;

  const newsExist = !(!primaryData || !primaryData.length);
  if (!newsExist) {
    return {
      dispatchProps,
      stateProps,
      newsExist,
      showLoadMoreButton: false,
    };
  }

  const showLoadMoreButton = isMoreDataExist(primaryData.length, quantityNews);

  return {
    ...dispatchProps,
    ...stateProps,
    newsExist,
    showLoadMoreButton,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(NewsList);
