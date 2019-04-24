import React from 'react';
import uuid from 'uuid/v1';
import { NewsCard } from '../index';
import './newsList.scss';

const NewsList = ({ primaryData, quantityNews }) => {
  const generateNewsCard = (data, quantity) =>
    data
      .slice(0, quantity)
      .map(news => (
        <NewsCard
          id={news.id}
          name={news.name}
          description={news.description}
          url={news.url}
          language={news.language}
          key={uuid()}
        />
      ));

  console.log(primaryData);

  return (
    <section className='news-list'>
      {primaryData && generateNewsCard(primaryData, quantityNews)}
    </section>
  );
};

export default NewsList;
