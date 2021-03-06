import React from 'react';
import uuid from 'uuid/v1';
import { NewsCard, Button } from '../index';
import './newsList.scss';

const NewsList = ({
  primaryData,
  quantityNews,
  loadMoreNews,
  newsExist,
  showLoadMoreButton,
}) => {
  const generateNewsCard = (data, quantity) =>
    data.slice(0, quantity).map(news => <NewsCard data={news} key={uuid()} />);

  if (!newsExist) {
    return (
      <section className='news-list'>
        <p className='exist-message'>News don`t exist...</p>
      </section>
    );
  }

  return (
    <section className='news-list content'>
      {generateNewsCard(primaryData, quantityNews)}
      {showLoadMoreButton && (
        <Button className='load-more-btn' makeChanges={loadMoreNews}>
          load more
        </Button>
      )}
    </section>
  );
};

export default NewsList;
