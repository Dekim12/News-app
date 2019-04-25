import React from 'react';
import uuid from 'uuid/v1';
import { NewsCard, Button } from '../index';
import { isMoreDataExist } from '../../appLogic';
import './newsList.scss';

const NewsList = ({ primaryData, quantityNews, loadMoreNews }) => {
  const generateNewsCard = (data, quantity) =>
    data.slice(0, quantity).map(news => <NewsCard data={news} key={uuid()} />);

  console.log(primaryData);

  if (!primaryData || !primaryData.length) {
    return (
      <section className='news-list'>
        <p className='exist-message'>News don`t exist...</p>
      </section>
    );
  }

  return (
    <section className='news-list content'>
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
