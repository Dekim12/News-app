import React from 'react';
import uuid from 'uuid/v1';
import { NewsCard, Button } from '../index';
import { isMoreDataExist } from '../../appLogic';
import './newsList.scss';

const NewsList = ({ primaryData, quantityNews, loadMoreNews }) => {
  const generateNewsCard = (data, quantity) =>
    data
      .slice(0, quantity)
      .map(news => (
        <NewsCard
          name={news.name}
          description={news.description}
          url={news.url}
          language={news.language}
          key={uuid()}
        />
      ));

  console.log(primaryData);

  if (!primaryData) {
    return null;
  }

  return (
    <section className='news-list'>
      {primaryData && generateNewsCard(primaryData, quantityNews)}
      {isMoreDataExist(primaryData.length, quantityNews) && (
        <Button className='load-more-btn' makeChanges={loadMoreNews}>
          load more
        </Button>
      )}
    </section>
  );
};

export default NewsList;
